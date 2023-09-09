import React, { useEffect } from "react";

const Hero: React.FC = () => {
  useEffect(() => {
    class StickyNavigation {
      private currentId: string | null = null;
      private currentTab: HTMLElement | null = null;
      private tabContainerHeight = 70;

      constructor() {
        const tabElements = document.querySelectorAll(".et-hero-tab");
        tabElements.forEach((tabElement) => {
          tabElement.addEventListener("click", (event) =>
            this.onTabClick(event, tabElement)
          );
        });

        window.addEventListener("scroll", () => {
          this.onScroll();
        });

        window.addEventListener("resize", () => {
          this.onResize();
        });
      }

      private onTabClick(event: any, element: any) {
        event.preventDefault();
        const scrollTop =
          (document.querySelector(element.getAttribute("href")!) as HTMLElement)
            .offsetTop -
          this.tabContainerHeight +
          1;
        window.scrollTo({ top: scrollTop, behavior: "smooth" });
      }

      private onScroll() {
        this.checkTabContainerPosition();
        this.findCurrentTabSelector();
      }

      private onResize() {
        if (this.currentId) {
          this.setSliderCss();
        }
      }

      private checkTabContainerPosition() {
        const tabContainer = document.querySelector(
          ".et-hero-tabs"
        ) as HTMLElement;
        if (tabContainer) {
          const offset =
            tabContainer.offsetTop +
            tabContainer.offsetHeight -
            this.tabContainerHeight;
          if (window.pageYOffset > offset) {
            const tabsContainer = document.querySelector(
              ".et-hero-tabs-container"
            ) as HTMLElement;
            if (tabsContainer) {
              tabsContainer.classList.add("et-hero-tabs-container--top");
            }
          } else {
            const tabsContainer = document.querySelector(
              ".et-hero-tabs-container"
            ) as HTMLElement;
            if (tabsContainer) {
              tabsContainer.classList.remove("et-hero-tabs-container--top");
            }
          }
        }
      }

      private findCurrentTabSelector() {
        const tabElements = document.querySelectorAll(".et-hero-tab");
        let newCurrentId;
        let newCurrentTab;
        const self = this;
        tabElements.forEach((tabElement) => {
          const id = tabElement.getAttribute("href");
          if (id) {
            const targetElement = document.querySelector(id) as HTMLElement;
            const offsetTop = targetElement.offsetTop - self.tabContainerHeight;
            const offsetBottom =
              targetElement.offsetTop +
              targetElement.offsetHeight -
              self.tabContainerHeight;
            if (
              window.pageYOffset > offsetTop &&
              window.pageYOffset < offsetBottom
            ) {
              newCurrentId = id;
              newCurrentTab = tabElement;
            }
          }
        });
        if (this.currentId !== newCurrentId || this.currentId === null) {
          this.currentId = newCurrentId!;
          this.currentTab = newCurrentTab!;
          this.setSliderCss();
        }
      }

      private setSliderCss() {
        let width = "0";
        let left = "0";
        if (this.currentTab) {
          width = window.getComputedStyle(this.currentTab).width!;
          left = this.currentTab.offsetLeft + "px";
        }
        const slider = document.querySelector(
          ".et-hero-tab-slider"
        ) as HTMLElement;
        if (slider) {
          slider.style.width = width;
          slider.style.left = left;
        }
      }
    }

    new StickyNavigation();
  }, []);

  return (
    <section className="et-hero-tabs" id="hero-cover">
      <div>
        <h1 className="text-5xl m-0">Anderson Gouveia</h1>
        <h3 className="text-xl opacity-60 tracking-widest m-3 p-1 border-t border-b border-gray-500">
          Representante Comercial
        </h3>
        <h2 className="text-2xl">portfólio</h2>
      </div>
      <div className="et-hero-tabs-container bg-gray-50 flex flex-row absolute bottom-0 w-full h-12 z-10">
        <a
          className="et-hero-tab sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
          href="#hero-cover"
        >
          Início
        </a>
        <a
          className="et-hero-tab sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
          href="#tab-produtos"
        >
          Equipamentos
        </a>
        <a
          className="et-hero-tab sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
          href="#tab-servicos"
        >
          Serviços
        </a>
        <a
          className="et-hero-tab sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
          href="#tab-sobre"
        >
          Sobre
        </a>
        <a
          className="et-hero-tab sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
          href="#tab-contato"
        >
          Contato
        </a>
        <span className="et-hero-tab-slider"></span>
      </div>
    </section>
  );
};

export default Hero;
