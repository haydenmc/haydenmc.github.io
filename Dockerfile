FROM ruby:3.3-slim

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

# Configure bundler to install gems system-wide
ENV BUNDLE_PATH=/usr/local/bundle
ENV BUNDLE_BIN=/usr/local/bundle/bin
ENV GEM_HOME=/usr/local/bundle
ENV PATH="${BUNDLE_BIN}:${PATH}"

# Set working directory
WORKDIR /site

# Copy Gemfile and install dependencies
COPY Gemfile Gemfile.lock ./
RUN bundle install

# Copy the rest of the site
COPY . .

# Expose Jekyll's default port
EXPOSE 4000

# Run Jekyll server with live reload and incremental builds
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload", "--incremental", "--drafts"]
