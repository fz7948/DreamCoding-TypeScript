import { BaseComponent, Component } from "../component.js";

export interface Composable {
  addChild(child: Component): void;
}

type OnCloseListener = () => void;

interface SectionContainer extends Component, Composable {
  setOnCloseListener(listener: OnCloseListener): void;
}

type SectionContainerConstructor = {
  new (): SectionContainer;
};

export class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements SectionContainer {
  private closeListener?: OnCloseListener;
  constructor() {
    super(`<li class="page-item">
            <section class="page-item_body">
            <div class="page-item_controls">
              <button class="close">&times;</button>
            </div>
            </section>
          </li>`);
    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    closeBtn.onclick = () => {
      // console.log(this.closeListener);
      // console.log(this.element);
      this.closeListener && this.closeListener();
    };
  }
  addChild(child: Component) {
    // console.log("??", child);
    const container = this.element.querySelector(
      ".page-item_body"
    )! as HTMLElement;
    child.attachTo(container);
  }
  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}

export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable {
  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super(`<ul class="page"></ul>`);
  }
  addChild(section: Component) {
    const item = new this.pageItemConstructor();
    // console.log(item);
    // console.log(section);
    item.addChild(section);
    // console.log(this.element);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListener(() => {
      // console.log(this.element);
      item.removeFrom(this.element);
    });
  }
}
