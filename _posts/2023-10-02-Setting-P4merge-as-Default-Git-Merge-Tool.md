---
title: "Setting P4merge as Default Git Merge Tool"
categories: [notes]
---

Perforce's p4merge tool has an excellent 3-way merge interface that VSCode (at
least today) does not provide. The license also allows for free commercial
use!

New enough versions of Git for Windows allow you to set the default merge tool
to p4merge without much fuss:

```cmd
git config --global merge.tool p4merge
```

If you'd like to set it as the default diff tool, you can do that too:

```cmd
git config --global diff.tool p4merge
```

To find out which tools Git knows about, run this:

```cmd
git difftool --tool-help
```

(this command takes multiple minutes to run on my machine).
