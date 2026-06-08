---
title: "Basic markdown test"
---

# Hello world!

This is a **page** generated from a <mark>Markdown file</mark>, which should—in
theory—allow us to do some fancy stuff. Since this is a static site, we should
be able to avoid <del>accessibility issues</del> having to write much inline HTML.

## Overview

Here's a high-level overview of what we'll cover:

- Topic 1
- Topic 2
- Topic 3

<div id="palettes">
<details open style="background-color: var(--color-primary);">
  <div>
    <rect style="background-color: var(--color-p0);"></rect>
    <rect style="background-color: var(--color-p1);"></rect>
    <rect style="background-color: var(--color-p2);"></rect>
    <rect style="background-color: var(--color-p3);"></rect>
    <rect style="background-color: var(--color-p4);"></rect>
    <rect style="background-color: var(--color-p5);"></rect>
    <rect style="background-color: var(--color-p6);"></rect>
    <rect style="background-color: var(--color-p7);"></rect>
    <rect style="background-color: var(--color-p8);"></rect>
    <rect style="background-color: var(--color-p9);"></rect>
  </div>
</details>
<details open style="background-color: var(--color-secondary);">
  <div>
    <rect style="background-color: var(--color-s0);"></rect>
    <rect style="background-color: var(--color-s1);"></rect>
    <rect style="background-color: var(--color-s2);"></rect>
    <rect style="background-color: var(--color-s3);"></rect>
    <rect style="background-color: var(--color-s4);"></rect>
    <rect style="background-color: var(--color-s5);"></rect>
    <rect style="background-color: var(--color-s6);"></rect>
    <rect style="background-color: var(--color-s7);"></rect>
    <rect style="background-color: var(--color-s8);"></rect>
    <rect style="background-color: var(--color-s9);"></rect>
  </div>
</details>
<details open style="background-color: var(--color-neutral);">
  <div>
    <rect style="background-color: var(--color-n0);"></rect>
    <rect style="background-color: var(--color-n1);"></rect>
    <rect style="background-color: var(--color-n2);"></rect>
    <rect style="background-color: var(--color-n3);"></rect>
    <rect style="background-color: var(--color-n4);"></rect>
    <rect style="background-color: var(--color-n5);"></rect>
    <rect style="background-color: var(--color-n6);"></rect>
    <rect style="background-color: var(--color-n7);"></rect>
    <rect style="background-color: var(--color-n8);"></rect>
    <rect style="background-color: var(--color-n9);"></rect>
  </div>
</details>
<style>
  details {
    padding: 12px;
    border-radius: var(--radius-3);
    color: var(--color-n0);
  }
  details > div {
    margin-top: 12px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 1em;
  }
  rect {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: var(--radius-3);
    border: var(--thick-1) solid black;
    box-shadow: 0 0 0 var(--thick-1) white;
  }
</style>
</div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque
doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si
aliquod aeternum et infinitum impendere malum nobis opinemur. Quod idem licet
transferre in voluptatem, ut postea variari voluptas distinguique possit,
augeri amplificarique non possit. At etiam Athenis, ut e patre audiebam facete
et urbane Stoicos irridente, statua est in quo a nobis philosophia defensa et
collaudata est, cum id, quod maxime placeat, facere possimus, omnis voluptas
assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et.

Here's a table without headers:

|                        |                |
| ---------------------- | -------------- |
| President              | Helen Hoang    |
| Vice President         | Adam Holden    |
| Secretary              | Chandan Sankar |
| Treasurer              | Brent Sohn     |
| Outreach Coordinator   | Kaden Ellison  |
| Systems Administrator  | Jibril Mamo    |
| Membership Coordinator | Justin Troth   |

And a table with headers:

| Position               | Person         |
| ---------------------- | -------------- |
| President              | Helen Hoang    |
| Vice President         | Adam Holden    |
| Secretary              | Chandan Sankar |
| Treasurer              | Brent Sohn     |
| Outreach Coordinator   | Kaden Ellison  |
| Systems Administrator  | Jibril Mamo    |
| Membership Coordinator | Justin Troth   |

### Markdown behavior

_Below are some things that could be typeset using markdown without latex
(links, images, super/subscripts), some of it ripped directly from the
[manim](https://www.github.com/ManimCommunity/manim) README file._

<p align="center">
  Center-aligned, <i>italicized</i> text using html tags.
</p>

Manim is an animation engine for explanatory math videos. It's used to create
precise animations programmatically, as demonstrated in the videos of
[3Blue1Brown](https://www.3blue1brown.com/).

> NOTE: This repository is maintained by the Manim Community and is not
> associated with Grant Sanderson or 3Blue1Brown in any way (although we are
> definitely indebted to him for providing his work to the world). If you would
> like to study how Grant makes his videos, head over to his repository
> ([3b1b/manim](https://github.com/3b1b/manim)). This fork is updated more
> frequently than his, and it's recommended to use this fork if you'd like to
> use Manim for your own projects.

Image by external URL

<figure>

![alt-text](https://raw.githubusercontent.com/ManimCommunity/manim/main/docs/source/_static/command.png)

<figcaption>Real caption under image</figcaption>
</figure>

Rare usage:

- Bullet point <small>with small tag</small> inside it
- Bullet point<sup>with superscript</sup> inside it
- Bullet point<sub>with subscript</sub> inside it

Unordered list

- George Washington

* John Adams

- Thomas Jefferson

Ordered list

1. James Madison
1. James Monroe (The numbers aren't used for the HTML output)
1. John Quincy Adams (so they will always display with correct numbering)

Nesting unordered lists

- Unordered list 1 item 1 (line up sub-lists with the first character)
  - Unordered list 2 item 1
    - Unordered list 3 item 1
    - Unordered list 3 item 2
  - Unordered list 2 item 2
    - Unordered list 4 item 1
- Unordered list 1 item 2

Nesting ordered lists

1. Ordered list 1 item 1 (line up sub-lists with the first character)
   1. ordered list 2 item 1
      1. Ordered list 3 item 1
      1. Ordered list 3 item 2
   1. Ordered list 2 item 2
      1. Ordered list 4 item 1
1. Ordered list 1 item 2

Nesting unordered and ordered lists

1. Ordered list 1 item 1 (line up sub-lists with the first character)
   - Unordered list 1 item 1
     1. Ordered list 2 item 1
     1. Ordered list 2 item 2
   - Unordered list 1 item 2
     1. Ordered list 3 item 1
1. Ordered list 1 item 2

Note that readability gets awkward with nesting, so avoid doing it in
general—but even more so with ordered lists, since it makes the markup harder
to read, too.

## Can we do math?

This sentence uses `$` delimiters to show math inline with LaTeX: $\sqrt{3x-1}+(1+x)^2$

**The Fourier Transform**, displayed with LaTeX as an equation:
$$\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-i 2 \pi \xi x} dx$$

Likewise, **The Cauchy-Schwarz Inequality**:
$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$

# Heading 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque
doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si
aliquod aeternum et infinitum impendere malum nobis opinemur.

Quod idem licet transferre in voluptatem, ut postea variari voluptas
distinguique possit, augeri amplificarique non possit. At etiam Athenis, ut e
patre audiebam facete et urbane Stoicos irridente, statua est in quo a nobis
philosophia defensa et collaudata est, cum id, quod maxime placeat, facere
possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
autem quibusdam et. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat
voluptatem. Ut enim aeque doleamus animo, cum corpore dolemus.

## Heading 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque
doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si
aliquod aeternum et infinitum impendere malum nobis opinemur.

Quod idem licet transferre in voluptatem, ut postea variari voluptas
distinguique possit, augeri amplificarique non possit. At etiam Athenis, ut e
patre audiebam facete et urbane Stoicos irridente, statua est in quo a nobis
philosophia defensa et collaudata est, cum id, quod maxime placeat, facere
possimus, omnis voluptas assumenda est.

### Heading 3

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque
doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si
aliquod aeternum et infinitum impendere malum nobis opinemur.

- bullet point 1
- [bullet point 2 with anchor link](#heading-2)
- bullet point 3 with [anchor link](#heading-3)
- [Go to heading 3](#heading-4)

Quod idem licet transferre in voluptatem, ut postea variari voluptas
distinguique possit, augeri amplificarique non possit. At etiam Athenis, ut e
patre audiebam facete et urbane Stoicos irridente, statua est in quo a nobis
philosophia defensa et collaudata est, cum id, quod maxime placeat, facere
possimus, omnis voluptas.

#### Heading 4

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque
doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si
aliquod aeternum et infinitum impendere malum nobis opinemur.

Quod idem licet transferre in voluptatem, ut postea variari voluptas
distinguique possit, augeri amplificarique non possit. At etiam Athenis, ut e
patre audiebam facete et urbane Stoicos irridente.

##### Heading 5

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque
doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si
aliquod aeternum et infinitum impendere malum nobis opinemur.

Quod idem licet transferre in voluptatem, ut postea variari voluptas
distinguique possit, augeri amplificarique non possit. At etiam Athenis, ut e
patre audiebam facete et urbane Stoicos irridente, statua est in quo a nobis
philosophia defensa et collaudata est, cum id, quod maxime placeat, facere
possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
autem quibusdam et. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor.

###### Heading 6

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque
doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si
aliquod aeternum et infinitum impendere malum nobis opinemur.

Quod idem licet transferre in voluptatem, ut postea variari voluptas
distinguique possit, augeri amplificarique non possit. At etiam Athenis, ut e
patre audiebam facete et urbane Stoicos irridente, statua est in quo a nobis
philosophia defensa et collaudata est, cum id, quod maxime placeat, facere
possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
autem.

# Extras

Inline code formatting as such: `Scene`

Code block formatting with syntax highlighting:

```python
from manim import *

class SquareToCircle(Scene):
    def construct(self):
        circle = Circle()
        square = Square()
        square.flip(RIGHT)
        square.rotate(-3 * TAU / 8)
        circle.set_fill(PINK, opacity=0.5)

        self.play(Create(square))
        self.play(Transform(square, circle))
        self.play(FadeOut(square))
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque
doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si
aliquod aeternum et infinitum impendere malum nobis opinemur.

---

Quod idem licet transferre in voluptatem, ut postea variari voluptas
distinguique possit, augeri amplificarique non possit. At etiam Athenis, ut e
patre audiebam facete et urbane Stoicos irridente, statua est in quo a nobis.

Philosophia defensa et collaudata est, cum id, quod maxime placeat, facere
possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
autem.
