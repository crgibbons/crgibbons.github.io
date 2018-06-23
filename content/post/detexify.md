+++
title = "Searcing for a LaTeX symbol"
date = 2018-06-22T00:00:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["proofs", "latex", "linear algebra"]
categories = ["teaching"]
summary = "Know you want to $\\LaTeX$ up a summation symbol, but don't know the command to use?  Don't stress!  Head to [DeTexify](http://detexify.kirelabs.org/classify.html) and draw what you're looking for."

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

Know you want to $\LaTeX$ up a summation symbol, but don't know the command to use?  Don't stress!  Head to [DeTexify](http://detexify.kirelabs.org/classify.html) and draw what you're looking for:

![DeTexify screenshot showing results for a handdrawn Sigma. The fourth result is highlighted](/img/blog/detexify.png "DeTexify screenshot")

Notice that there are a few results.  The one we want is the highlighted one, which tells us to use ` \sum ` within math mode.  For example, to produce
$$\sum_{j = 1}^{n} \mathrm{Col}_j(A)$$ we use the code

```tex
$\sum_{j = 1}^{n} \mathrm{Col}_j(A)$        %inline version
\[                                          
    \sum_{j = 1}^{n} \mathrm{Col}_j(A)      %display version
\]                                          
```
(we need enclosing `$ ... $` or `\[ ... \]` because `\sum` only works in math mode).

Now let's say you actually weren't interested in the summation symbol but really wanted to typeset a fancy greek Sigma like in the third result. You'll notice an extra `\usepackage` parameter, meaning that this symbol isn't included in $\LaTeX$ by default.  That's okay.  Just add the code   `\usepackage{upgreek}`
to your preamble so that you can use `$\Upsigma$` in the body of your $\LaTeX$ document:

```tex
\documentclass{article}
    \usepackage{amsmath,amssymb,amsthm}  % if you're using one of my templates, you have these
    \usepackage{upgreek}                            % you'll have to add this yourself
        
        ...
        
\begin{document}
    Here is my fancy $\Upsigma$!
\end{document}
```

Here's a little homework: use DeTexify to figure out what package you need to typeset $\eth$.
