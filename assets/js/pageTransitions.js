// Some code for light-weight transitions between pages
function loadPage(url, shouldPushState = false, scrollPosition = 0)
{
    // First, transition the page out
    var startTime = Date.now();
    document.body.classList.remove("in");
    document.body.classList.add("out");
    fetch(url)
        .then(response => response.text())
        .then(text => {
            // Update state (if we're meant to)
            if (shouldPushState)
            {
                window.history.replaceState({ scrollPosition: window.scrollY }, document.title);
                window.history.pushState(null, null, url);
            }

            // Load into new document, then swap
            var newDoc = document.implementation.createHTMLDocument();
            newDoc.documentElement.innerHTML = text;
            document.title = newDoc.title; // Replace title immediately
            
            // Wait for transition to finish if we're too early
            var completeUpdate = () => {
                // Only replace body and update title (don't re-run scripts or CSS)
                document.body.replaceWith(newDoc.body);
                hookLinks();
                window.scroll(0, scrollPosition);

                // Animate back in
                document.body.classList.remove("out");
                document.body.classList.add("in");
            };
            var endTime = Date.now();
            var elapsed = endTime - startTime;
            if (elapsed < 200)
            {
                setTimeout(completeUpdate, 200 - elapsed);
            }
            else
            {
                completeUpdate();
            }

            // Count as pageview in analytics
            try {
                if (window.goatcounter && window.goatcounter.count) {
                    window.goatcounter.count({
                        path: url,
                    });
                }
            } catch (e) {
                // Silently ignore analytics errors
                console.warn('GoatCounter tracking failed:', e);
            }
        });
}

function onLinkClicked(event)
{
    event.preventDefault();
    var target = event.currentTarget;
    var link = target.href;
    loadPage(link, true);
}

function hookLinks()
{
    var links = document.querySelectorAll("a");
    links.forEach(link => {
        if ((link.host === window.location.host) &&
            (link.protocol === window.location.protocol))
        {
            link.addEventListener("click", onLinkClicked);
        }
    });
}

// Fun little function for better transitions between pages
if (window.history && window.history.pushState && window.fetch)
{
    window.addEventListener("load", hookLinks);
    window.addEventListener("popstate", event => {
        if (event.state !== null && event.state.scrollPosition)
        {
            loadPage(document.location, false, event.state.scrollPosition);
        }
        else
        {
            loadPage(document.location, false);
        }
    });
    if (window.history.scrollRestoration)
    {
        window.history.scrollRestoration = "manual";
    }
}