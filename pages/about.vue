<template>
    <section class="v-community-uid" >
        <template
            v-if="aboutContent === null"
        >
            <div
                class="v-community-uid__header v-community-uid__header--is-loading"
            >
                <app-loader :is-black="false" />
            </div>
        </template>

        <template
            v-else
        >

            <div
                class="v-communaute-index__header"
            >
                <div
                    class="fp-grid-coll-container fp-grid-coll-container--center v-communaute-index__header__box"
                >
                    <div
                        class="fp-grid-coll-16-24 fp--reg-grid-coll-22-24 hem-rm-margins fp-grid-row-container fp-grid-row-container--center"
                    >
                        <h1>{{aboutContent.title}}</h1>
                    </div>
                </div>

            </div>


          <!--
          ===== text EN =====
          -->
          <template v-if="useUrlLangStore().lang === 'en'">
          <div
            class="fp-grid-coll-container fp-grid-coll-container--center v-community-uid__publication"
            v-if="aboutContent.abouttext_en.length"
          >
            <div
              class="fp-grid-coll-16-24 fp--reg-grid-coll-22-24"
            >
              <template
                v-for="textItem of aboutContent.abouttext_en"
              >
                <template
                  v-if="textItem.type === 'heading'"
                >
                  <h2 v-if="(textItem as IHeadingBlock).content.level === 'h2'" >{{(textItem as IHeadingBlock).content.text}}</h2>
                  <h3 v-if="(textItem as IHeadingBlock).content.level === 'h3'" >{{(textItem as IHeadingBlock).content.text}}</h3>
                  <h4 v-if="(textItem as IHeadingBlock).content.level === 'h4'" >{{(textItem as IHeadingBlock).content.text}}</h4>
                  <h5 v-if="(textItem as IHeadingBlock).content.level === 'h5'" >{{(textItem as IHeadingBlock).content.text}}</h5>
                  <h6 v-if="(textItem as IHeadingBlock).content.level === 'h6'" >{{(textItem as IHeadingBlock).content.text}}</h6>
                </template>
                <template
                  v-else-if="textItem.type === 'text'"
                >
                  <div v-html="textItem.value" ></div>
                </template>

                <div
                  class="v-community-uid__content__img"
                  v-else-if="textItem.type === 'image'"
                >
                  <img
                    :alt="textItem.alt"
                    :src="textItem.image?.resize.large"
                  >
                  <h6 v-html="textItem.caption" ></h6>
                </div>


                <div
                  class="v-community-uid__content__logo"
                  v-else-if="textItem.type === 'logo'"
                >
                  <img
                    :alt="textItem.alt"
                    :src="textItem.image?.resize.large"
                  >
                </div>

              </template>
            </div>
          </div>
          <div
            class="fp-grid-coll-container fp-grid-coll-container--center v-community-uid__publication"
            v-if="aboutContent.abouttext_en.length"
          >
            <p v-if="aboutContent.abouttext_en.length === 0"
               style="color: var(--color-main--orange)"
            >This part is not yet translated</p>
          </div>
          </template>





          <!--
          ===== text FR =====
          -->

          <template v-else>
            <div
                class="fp-grid-coll-container fp-grid-coll-container--center v-community-uid__publication"
                v-if="aboutContent.abouttext.length"
            >
                <div
                    class="fp-grid-coll-16-24 fp--reg-grid-coll-22-24"
                >
                    <template
                        v-for="textItem of aboutContent.abouttext"
                    >
                        <template
                            v-if="textItem.type === 'heading'"
                        >
                            <h2 v-if="(textItem as IHeadingBlock).content.level === 'h2'" >{{(textItem as IHeadingBlock).content.text}}</h2>
                            <h3 v-if="(textItem as IHeadingBlock).content.level === 'h3'" >{{(textItem as IHeadingBlock).content.text}}</h3>
                            <h4 v-if="(textItem as IHeadingBlock).content.level === 'h4'" >{{(textItem as IHeadingBlock).content.text}}</h4>
                            <h5 v-if="(textItem as IHeadingBlock).content.level === 'h5'" >{{(textItem as IHeadingBlock).content.text}}</h5>
                            <h6 v-if="(textItem as IHeadingBlock).content.level === 'h6'" >{{(textItem as IHeadingBlock).content.text}}</h6>
                        </template>
                        <template
                            v-else-if="textItem.type === 'text'"
                        >
                            <div v-html="textItem.value" ></div>
                        </template>

                        <div
                          class="v-community-uid__content__img"
                          v-else-if="textItem.type === 'image'"
                        >
                          <img
                            :alt="textItem.alt"
                            :src="textItem.image?.resize.large"
                          >
                          <h6 v-html="textItem.caption" ></h6>
                        </div>


                      <div
                        class="v-community-uid__content__logo"
                        v-else-if="textItem.type === 'logo'"
                      >
                        <img
                          :alt="textItem.alt"
                          :src="textItem.image?.resize.large"
                        >
                      </div>

                    </template>
                </div>
            </div>
          </template>
        </template>


    </section>
</template>





<script lang="ts" setup>
import {Ref, UnwrapRef} from "vue";
import {IHeadingBlock, IHemApi_about} from "~/global/hemApi";
import {getAbout} from "~/global/getDataFromHemApi";
import langGlobal from "~/middleware/lang.global";
import {useUrlLangStore} from "~/composable/useUrlLang";

const aboutContent: Ref<UnwrapRef<null | IHemApi_about>> = ref(null)

onMounted(() => {
    loadCommunauteDataFromHEMAPI()
})

async function loadCommunauteDataFromHEMAPI() {
    const aboutData = await getAbout()

    window.setTimeout(() => {
        aboutContent.value = aboutData
    }, 2_000)

}

</script>





<style lang="scss" scoped >
.v-communaute-index__header {
    margin-top: var(--nav-height);
    background-color: #0e264e;
    color: white;
    height: 30rem;
}

.v-communaute-index__header__box {
    height: 100%;
}

.v-community-uid__publication {
    padding-bottom: 5rem;
}

.v-about-index {
    background: white;
}

.v-about-index__form {
    display: flex;
    flex-direction: column;
    gap: var(--gutter-xl);
    margin-top: 8rem;
}

.v-about-index__header {
    margin-top: var(--nav-height);
    background-color: #0e264e;
    color: white;
    height: 30rem;
}

.v-about-index__header__box {
    height: 100%;
}

.v-about-index__person-box {
    margin-top: 8rem;
}

.v-about-index__person-box__item {
    display: block;
    border-top: solid 2px black;
    padding-top: 2rem;
    padding-bottom: 2rem;
    color: black;
    text-decoration: none;
}

.v-about-index__person-box__item__user {
    margin: 0;
}

.v-about-index__person-box__item__status {
    margin-top: 0;
    margin-bottom: 0;
}

.v-community-uid__content__img {
  width: 100%;

  img {
    display: block;
    width: 100%;
    height: auto;
    max-height: 90vh;
    object-fit: contain;
    object-position: center;
  }
}

.v-community-uid__content__logo {
  width: 100%;

  img {
    display: block;
    width: auto;
    height: 8rem;
    object-fit: contain;
    object-position: center;
  }
}

</style>

