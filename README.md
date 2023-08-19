I just got it to work with canvaspixel.net. All credit goes to Darkness. ~~And his excellent cooperation with me~~

***Bot for pixelcanvas.net***

**Installation**<br/>
1. [Download Tampermonkey Stable](https://www.tampermonkey.net)
2. [Install bot](https://raw.githubusercontent.com/Sallbet/touchedbydarkness.github.io/main/stuff/ppf_bot/initer.user.js)
3. (or you can install [bot v2](https://raw.githubusercontent.com/Sallbet/touchedbydarkness.github.io/main/stuff/ppf_bot_2/initer.user.js) with more than 20 strategies and some new features, but also with more bugs)

**Usage**<br/>
  Choose coordinates and image.<br/>
  The colors of the image will be automatically converted if you don't care about it, but better use the site converter.<br/>
  Press key "N" to set the start coordinates.<br/>
  Press key "B" to start or stop.<br/>
  The bot supports several fill strategies and fill color selection.<br/>
  If a captcha appears, the bot will notify you (need to enable notification).<br/>
  After solving captcha press "B" to continue bot work.

**Detailed instructions**<br/>
1. **Strategy**
   * *Random*
      Just random.
   * *linear*
      Paints from top to bottom with lines.
   * *Center*
      Circle expanding from the center to the edges.
   * *Chess*
      Draws from top to bottom in chess, grid... I think you get the idea.
1. **Draw clr** (color the bot will paint with)
   * *All*
      All colors are used
   * *Selected*
      Only the selected color is used



***Void Bot for canvaspixel.net***

**Installation**<br/>
1. [Download Tampermonkey Stable](https://www.tampermonkey.net)
2. [Install bot](https://raw.githubusercontent.com/Sallbet/touchedbydarkness.github.io/main/stuff/ppf_void_bot/initer.user.js)

**Usage**<br/>
1. Press key "V" to start or stop.
   If a captcha appears, the bot will notify you (need to enable notification).
   After solving captcha press "V" to continue bot work.
2. Make void great again!

**Detailed instructions**<br/>
1. **Strategy**
   * *Random*
      Just random.
   * *Regenerate*
      Healing very small wounds.
   * *Spread*
      Like regenerate but also spread Void.
   * *Mycelium*
      Makes lines that do not touch each other, looks like roots.
   * *Spores*
      Random points that do not touch each other.
2. **Direction**
   * *Defalut*
      Random pixel order.
   * *Center*
      Pixels are placed as close to the center of the screen as possible.
   * *Near*
      Pixel will be placed near to the last bot pixel.
3. **Cover**
   * *All*
      Cover all pixels.
   * *Colored*
      Cover all without background
   * *Background*
      Cover ground and ocean
   * *Ground*
      Cover only ground (white pxls)
      
**Notes**<br/>
Bot can build templates in the repository.