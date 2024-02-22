# 📜 Acme Notes
[https://acme-notes.vercel.app/](https://acme-notes.vercel.app/)
## Overview

Embark on a note-taking journey like never before! At Acme Note, we've transformed the art of note-making into a seamless and empowering experience. Say goodbye to scattered thoughts and hello to a world of organized brilliance.

## Framework and Major Packages
- React
- Tailwind CSS
- Typescript

## Page Load Time Measurement
For all the page optimisation analysis, I have used Google's Lighthouse tool and Page Speed Insights to analysze the page load time, along with how well it performs as per web standards

**Lighthouse Report:**

Desktop view:

![lighthouse-desktop](https://github.com/rajprakash00/acme-notes/assets/42652941/89e7e779-92d0-4a69-9bc8-ce277aacf9b4)

Mobile view:

![lighthouse-mobile](https://github.com/rajprakash00/acme-notes/assets/42652941/5377c760-d22b-454c-a93b-02f43a02176c)


## Optimizations for Performance
- **Image formats**: Used avif and webp formats for more memory images and to decrease loading time since avif format uses low-fidelity compression and saving bandwidth.
- **Lazy loading**: Loading all images upon page rendered should be avoided and it gets the LCP score high. Also we shouln't lazy load all LCP images(hero images,etc.) since browser may defer the LCP image in favour of other resources.
- **Layout shift optimisation**: Faced a layout shift above 0.1 and most common causes are image without dimesions,web fonts,etc. In my case it was happening due to image dimesions mostly so fixed some those according to properly sized images.
- **Improve a11y**: Was facing a low accessibilty score and fixed with adding some aria-labels and color contrast issues. Due to text in foreground and background color contrast not being above 3:1(larger text) and 4:5:1(smaller text)  

