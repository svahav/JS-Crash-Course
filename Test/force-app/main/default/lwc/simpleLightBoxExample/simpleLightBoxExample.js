import { LightningElement } from "lwc";
import SL from "@salesforce/resourceUrl/simplelightbox";
import { loadStyle, loadScript } from "lightning/platformResourceLoader";

export default class SimpleLightBoxExample extends LightningElement {
  slLoaded = false;
  renderedCallback() {
    if (!this.slLoaded) {
      Promise.all([
        loadStyle(this, SL + "/simpleLightBox/dist/simpleLightBox.css"),
        loadScript(this, SL + "/simpleLightBox/dist/simpleLightBox.js")
      ])
        .then(() => {
          this.slLoaded = true;
        })
        .catch((error) => {
          console.error("Could not initilize simple light box", error);
        });
    }
  }

  }

