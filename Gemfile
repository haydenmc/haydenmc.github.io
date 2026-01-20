# frozen_string_literal: true

source "https://rubygems.org"

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

gem "jekyll"

# Avoids warnings about loading from standard library
gem "csv"
gem "base64"
gem "logger"

# Required for Windows file monitoring
# REMOVED until https://github.com/Maher4Ever/wdm/issues/27 is resolved.
# gem 'wdm', '>= 0.1.0' if Gem.win_platform?