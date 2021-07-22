import { MediaSectionInput } from "./components/dialog/input/media-inputs.js";
import { TextSectionInput } from "./components/dialog/input/text-inputs.js";
import {
  InputDialog,
  MediaData,
  TextData,
} from "./components/dialog/dialog.js";
import { Component } from "./components/component.js";
import { VideoComponent } from "./components/page/item/video.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { NoteComponent } from "./components/page/item/note.js";
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from "./components/page/page.js";
import { ImageComponent } from "./components/page/item/images.js";

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
  new (): T;
};
class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    // image
    this.bindElementToDialog<MediaSectionInput>(
      "#new-image",
      MediaSectionInput,
      (input: MediaSectionInput) => new ImageComponent(input.title, input.url)
    );
    // const imageBtn = document.querySelector("#new-image")! as HTMLButtonElement;
    // imageBtn.addEventListener("click", () => {
    //   const dialog = new InputDialog();
    //   const inputSection = new MediaSectionInput();
    //   dialog.addChild(inputSection);
    //   dialog.attachTo(dialogRoot);

    //   dialog.setOncloseListener(() => {
    //     dialog.removeFrom(dialogRoot);
    //   });
    //   dialog.setOnSubmitListener(() => {
    //     const image = new ImageComponent(inputSection.title, inputSection.url);
    //     this.page.addChild(image);
    //     dialog.removeFrom(dialogRoot);
    //   });
    // });

    // video
    this.bindElementToDialog<MediaSectionInput>(
      "#new-video",
      MediaSectionInput,
      (input: MediaSectionInput) => new VideoComponent(input.title, input.url)
    );
    // const videoBtn = document.querySelector("#new-video")! as HTMLButtonElement;
    // videoBtn.addEventListener("click", () => {
    //   const dialog = new InputDialog();
    //   const inputSection = new MediaSectionInput();
    //   dialog.addChild(inputSection);
    //   dialog.attachTo(dialogRoot);

    //   dialog.setOncloseListener(() => {
    //     dialog.removeFrom(dialogRoot);
    //   });
    //   dialog.setOnSubmitListener(() => {
    //     const image = new VideoComponent(inputSection.title, inputSection.url);
    //     this.page.addChild(image);
    //     dialog.removeFrom(dialogRoot);
    //   });
    // });

    // note
    this.bindElementToDialog<TextSectionInput>(
      "#new-note",
      TextSectionInput,
      (input: TextSectionInput) => new NoteComponent(input.title, input.body)
    );
    // const noteBtn = document.querySelector("#new-note")! as HTMLButtonElement;
    // noteBtn.addEventListener("click", () => {
    //   const dialog = new InputDialog();
    //   const inputSection = new TextSectionInput();
    //   dialog.addChild(inputSection);
    //   dialog.attachTo(dialogRoot);

    //   dialog.setOncloseListener(() => {
    //     dialog.removeFrom(dialogRoot);
    //   });
    //   dialog.setOnSubmitListener(() => {
    //     const image = new NoteComponent(inputSection.title, inputSection.body);
    //     this.page.addChild(image);
    //     dialog.removeFrom(dialogRoot);
    //   });
    // });

    // todo
    this.bindElementToDialog<TextSectionInput>(
      "#new-todo",
      TextSectionInput,
      (input: TextSectionInput) => new TodoComponent(input.title, input.body)
    );
    // const todoBtn = document.querySelector("#new-todo")! as HTMLButtonElement;
    // todoBtn.addEventListener("click", () => {
    //   const dialog = new InputDialog();
    //   const inputSection = new TextSectionInput();
    //   dialog.addChild(inputSection);
    //   dialog.attachTo(dialogRoot);

    //   dialog.setOncloseListener(() => {
    //     dialog.removeFrom(dialogRoot);
    //   });
    //   dialog.setOnSubmitListener(() => {
    //     const image = new TodoComponent(inputSection.title, inputSection.body);
    //     this.page.addChild(image);
    //     dialog.removeFrom(dialogRoot);
    //   });
    // });
  }
  private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component
  ) {
    const element = document.querySelector(selector)! as HTMLButtonElement;
    element.addEventListener("click", () => {
      const dialog = new InputDialog();
      const input = new InputComponent();
      dialog.addChild(input);
      dialog.attachTo(this.dialogRoot);

      dialog.setOncloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const image = makeSection(input);
        this.page.addChild(image);
        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
}

new App(document.querySelector(".document")! as HTMLElement, document.body);
