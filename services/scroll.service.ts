import { Injectable } from '@angular/core';
import { AnchorListComponent } from '../components/anchor-list/anchor-list.component';
import { MainComponent } from '../components/main/main.component';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }
  scrollToClickedComponent(anchorListObj:AnchorListComponent) {
    if (anchorListObj.ranges)
      for (let range of anchorListObj.ranges) {
        if (range[2] === anchorListObj.ActiveComponentName) {
          const allComponents = document.getElementById(
            'scrolling-element-inside'
          ) as HTMLElement;
          allComponents?.scrollTo({ top: range[0] - 200, behavior: 'smooth' });
        }
      }
  }
  isScrollToTitleOfComponentSucceeded(anchorListObj:AnchorListComponent){
    const activeComponent = document.getElementById(anchorListObj.ActiveComponentName);

   return activeComponent && anchorListObj.lastComponentActiveId !== anchorListObj.ActiveComponentName

  }
  scrollToTitleOfComponentHandler(anchorListObj:AnchorListComponent) {
    if(this.isScrollToTitleOfComponentSucceeded(anchorListObj)){
     this.scrollToTitleOfComponent(anchorListObj)
     anchorListObj.lastComponentActiveId = anchorListObj.ActiveComponentName;
    }

    }
    scrollToTitleOfComponent(anchorListObj:AnchorListComponent){
      const container = document.getElementById('container');
      const activeComponent = document.getElementById(anchorListObj.ActiveComponentName);
      const { right } = activeComponent!.getBoundingClientRect();
      container?.scrollTo({ left: right, top: right, behavior: 'smooth' });
    }
    handleWindowScroll(componentObj:MainComponent) {
      const scrollingArea = document.getElementById('scrolling-element-inside');
      if (!scrollingArea) return;

      const halfWindowHeight = window.innerHeight / 2;
      const components: NodeListOf<Element> =
        document.querySelectorAll('.components');
      const newArray: any[] = [];
      let index = 11;
      components.forEach((item: Element) => {
        const rect = item?.getBoundingClientRect();
        const start = Math.floor(rect?.top + scrollingArea.scrollTop);
        const end = Math.floor(rect?.bottom + scrollingArea.scrollTop);
        newArray.push([start, end, componentObj.componentsId[index]]);

        index--;
      });

      componentObj.currentPosition = scrollingArea.scrollTop;
      componentObj.generalSvc.ranges.next([...newArray]);

      for (const range of newArray) {
        if (range == null) continue;
        if (
          componentObj.currentPosition + halfWindowHeight >= range[0] &&
          componentObj.currentPosition + halfWindowHeight < range[1]
        ) {
          componentObj.generalSvc.ActiveComponentName.next(range[2]);
          break;
        }
      }
    }
  }


