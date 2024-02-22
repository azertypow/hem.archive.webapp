<template>
    <section class="v-community-uid" >
        <template
                v-if="personDetails === null"
        >
            <div
                    class="v-community-uid__header v-community-uid__header--is-loading"
            >
                <app-loader :is-black="false" />
            </div>
        </template>

        <template
                v-else-if="errorMessage"
        >
            <h1
                    style="color: white"
            >
                {{errorMessage}}
            </h1>
        </template>


        <template
                v-else
        >
            <div
                    class="v-community-uid__header"
            >
                <div class="fp-grid-coll-container fp-grid-coll-container--center fp-grid-coll-container--no-wrap">

                    <div
                        class="fp-grid-coll-16-24"
                    >
                        <div
                            class="fp-grid-coll-container"
                        >
                            <div class="fp-grid-coll-16-24">
                                <h1>{{ personDetails.firstname }} {{ personDetails.name }}</h1>
                                <h3>{{ personDetails.job }}</h3>
                                <p>{{ personDetails.jobdetail }}</p>

                                <p>{{ personDetails.mail }}</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div
                    class="fp-grid-coll-container fp-grid-coll-container--center"
            >
                <div
                        class="fp-grid-coll-16-24"
                >
                    <h2>Biographie</h2>
                </div>
                <div
                        class="fp-grid-coll-16-24"
                        v-html="personDetails.bio"
                >

                </div>
            </div>

            <div
                    class="fp-grid-coll-container fp-grid-coll-container--center v-community-uid__publication"
                    v-if="Object.keys(personDetails.researchProject).length"
            >
                <div
                        class="fp-grid-coll-16-24"
                >
                    <h2>Projets de recherche</h2>
                </div>
                <div
                        class="fp-grid-coll-16-24"
                >
                    <div
                            class="v-community-uid__publication__index"
                            v-for="researchProject of personDetails.researchProject"
                    >{{researchProject.content.title}}</div>
                </div>
            </div>

            <div
                    class="fp-grid-coll-container fp-grid-coll-container--center v-community-uid__publication"
                    v-if="personDetails?.publications.length"
            >
                <div
                        class="fp-grid-coll-16-24"
                >
                    <h2>Publications</h2>
                </div>
                <div
                        class="fp-grid-coll-16-24"
                >
                    <a
                            target="_blank"
                            v-for="publication of personDetails?.publications"
                            class="v-community-uid__publication__index"
                            :href="publication.publicationlink.length ? publication.publicationlink : undefined"
                    >{{publication.publicationdescription}}</a>
                </div>
            </div>
        </template>


    </section>
</template>





<script lang="ts" setup>
import {getPersonDetails, getProjectDataByUdi} from "~/global/getDataFromHemApi";
import {Ref, UnwrapRef} from "vue";
import {IHemApi_communaute, IHemApi_PersonDetails, IHemApi_projectDetails} from "~/global/hemApi";
import {goToProject} from "~/global/goToProject";
import AppHeader from "~/components/appHeader.vue";

definePageMeta({
    pageTransition: {
        name: 'over',
    }
})

const personDetails: Ref<UnwrapRef<null | IHemApi_PersonDetails >> = ref(null)
const errorMessage: Ref<UnwrapRef<null | string>> = ref(null)

onMounted(() => {
    loadPersonDetailsFromHEMAPI()
})


async function loadPersonDetailsFromHEMAPI() {
    const personDetailsUid = useRoute().params.communityUid

    if( typeof personDetailsUid === 'string') {
        const personDetailsData = await getPersonDetails(personDetailsUid)

        if('error' in personDetailsData) errorMessage.value = personDetailsData.error
        else personDetails.value = personDetailsData
    }
}

</script>





<style lang="scss" scoped >
.v-community-uid {
}

.v-community-uid__header {
  display: flex;
    padding-top: var(--nav-height);

  &.v-community-uid__header--is-loading {
    color: var(--color-grey);
    align-items: center;
    justify-content: center;
    height: calc( 100vh - var(--nav-height));
  }

}

.v-community-uid__header__cover {
  display: block;
  width: 100%;
  height: auto;
}

.v-community-uid__publication {
  padding-bottom: 5rem;
}

.v-community-uid__publication__index {
  display: block;
  padding-top: 3rem;
  padding-bottom: 3rem;
  line-height: 3rem;
  font-size: 2.8rem;
  border-top: solid 1px;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: white;
    background: black;

    &:before,
    &:after {
      content: "";
      display: block;
      background: inherit;
      height: 100%;
      width: 5rem;
      position: absolute;
    }

    &:before{
      top: 0;
      left: -5rem;
      border-radius: 5rem 0 0 5rem;
    }

    &:after {
      top: 0;
      right: -5rem;
      border-radius: 0 5rem 5rem 0;
    }
  }
}

</style>
