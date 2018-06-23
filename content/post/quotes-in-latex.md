+++
title = "Quotes in LaTeX"
date = 2018-06-22T00:00:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["proofs", "latex", "linear algebra"]
categories = ["teaching"]
summary = "If you try to use regular quotation marks in $\\LaTeX$, you'll notice you get wacky quotes."

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
# Use `caption` to display an image caption.
#   Markdown linking is allowed, e.g. `caption = "[Image credit](http://example.org)"`.
# Set `preview` to `false` to disable the thumbnail in listings.
[header]
image = ""
caption = ""
preview = true

+++

If you try to use `"..."`  in $\LaTeX$, you'll notice you get wacky quotes. To get quotes to show up properly, use the backtick `` ` ``  twice for the start quotes and the apostrophe `` ' `` twice for the end quotes, like so:
```
``Aha!'' she remarked. 
```
