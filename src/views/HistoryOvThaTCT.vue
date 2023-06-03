<script setup>

  import { ref } from 'vue'

  import StepInStone from '../components/StepInStone.vue'

  const newLondonStepWxrds = ref([
    {
      wxrdvalue: 'New Millenium Magic',
      wxrdtype: 'BoK',
      content: 'New Millenium Magic, by Donald Tyson',
      related: '',
      uuid: '205963c0-2715-48a4-af7b-2c5bc7112cff',
      image: 'NEW_MILLENIUM_MAGIC_COVER.png'
    },
    {
      wxrdvalue: 'The Satanic Witch',
      wxrdtype: 'BoK',
      content: 'The Satanic Witch, by Anton LaVey',
      related: '',
      uuid: '93288abc-266a-429a-b780-9218d0268a3b',
      image: 'THE_SATANIC_WITCH_COVER.png'
    },
    {
      wxrdvalue: '777',
      wxrdtype: 'BoK',
      content: '777, by Aleister Crowley',
      related: '',
      uuid: '0c85589f-a4f4-4d5c-8baf-baf1b0492506',
      image: '777_COVER.png'
    },
    {
      wxrdvalue: 'The Golden Dawn',
      wxrdtype: 'BoK',
      content: 'The Golden Dawn, by Israel Regardie',
      related: '',
      uuid: '4fa09bb9-7056-4d15-9003-f8ec606d4c24',
      image: 'THE_GOLDEN_DAWN_COVER.png'
    }
  ])

  const madisonStepWxrds = ref([
    {
      wxrdvalue: 'Liber ABA',
      wxrdtype: 'BoK',
      content: 'Magick In Theory And Practice (Book 4) - Liber ABA, by Aleister Crowley',
      related: 'Thelema, Hermeticism, Gnosticism (Pythagorean)',
      uuid: '741a8d5a-a7ce-40c4-a913-12d6eb2acd2b',
      image: 'LIBER_ABA_COVER.png'
    },
    {
      wxrdvalue: 'Nightside of Eden',
      wxrdtype: 'BoK',
      content: 'Nightside of Eden, by Kenneth Grant',
      related: '',
      uuid: '2adb376c-513a-43e4-a93f-051962577504',
      image: 'NIGHTSIDE_OF_EDEN_COVER.png'
    },
    {
      wxrdvalue: 'The Pillars Of Tubal Cain',
      wxrdtype: 'BoK',
      content: 'The Pillars Of Tubal Cain, by Nigel Jackson and Michael Howard',
      related: '',
      uuid: 'efc566d7-8608-4e7b-b8dd-7ef653c56069',
      image: 'THE_PILLARS_OF_TUBAL_CAIN.png'
    }
  ])

  

  const mplsStepWxrds = ref([
    {
      wxrdvalue: 'Behutet',
      wxrdtype: 'ZiNe',
      content: 'Behutet',
      related: '',
      uuid: 'b537d0c7-faa3-4676-8c51-fb1c252190c9',
      image: 'BEHUTET_MAGAZINE_COVER.png'
    },
    {
      wxrdvalue: 'Clavicula Nox',
      wxrdtype: 'ZiNe',
      content: 'Clavicula Nox',
      related: '',
      uuid: 'f2bd5d47-8e32-4b5d-ae5f-fd9a252c4d94',
      image: ''
    }
  ])


</script>

<template>
    <p>
        A History ov tha TCT
    </p>
    <p>
        The Typhonic Craft Tradition has evolved over the course of the last three decades from an ever evolving meshwork of syncretizations, the nature of the mysteries and the length of time between then and now has some of the details more shrouded in mystery but most illustrative is the time at which different ideas became incorporated into the central mysteries of the TCT. 
    </p>
    <p>
        The founding members originally came together in Madison, WI in the year 1997 and had divergent interests in art and spirituality but ultimately found commonality through two specific avenues of interest, Chaos Magick and the Typhonian Ordo Templi Orientis (TOTO).
    </p>
    <p>
        This Tradition has grown over three decades and across multiple metropolitan centers, each lending their own influence and flavor to what has become a potent brew long steeped in experiential gnosis.
    </p>
    <p>
        As this is a syncretic tradition, it is best to trace its roots to the ideas as they became grafted into the warp and weft of the tapestry that has taken shape over the course of these journeys. Within TCT, there is an importance put not only on the ideas that inform an evolution of consciousness, but also on the Places in which those ideas are developed and explored. To this end, we would like to create a Gallery of sorts each centered on Key Sources, the ideas within those sources that came to be fundamental to the Tradition as it grew, and the Cities wherein those source ideas were first discovered and explored.
    </p>
    <p>
        We specifically are putting this into a version controlled website so we can see the thing grow as all the remembrances are filled in. Things will be shifted around as histories become clarified and uncovered anew. The version history of this document will serve as a revision history for future explorations.
    </p>
    <p>
        Some of the founding members were originally from Madison, others ended up there while attending college in the late 90s, all believe it was more than merely happenstance and the journey is worth sharing.
    </p>
    <p>
        When the first inklings of the Tradition were starting to whisper their way into the lives of the early initiates, Germanic influenced Neo-Paganism, Traditional Crowleyan Thelema, and LaVeyan Satanism were the primary substrates which formed a fertile bed of ideas ready to be fertilized by what was to come. When first arriving in Madison, these three traditional roots were the ones which played the largest significance in the early practices. We will begin by listing sources from memory which we consider to have been fundamental, as even decades later they are burned into memory as powerful milestones along the path.

    </p>
    <p>
        In no particular order, the most influential books from the New London era were
    </p>
    <ul>
        <li>Witchcraft Today, by Scott Cunningham</li>
        <li>True Magick, by Amber K</li>
        <li>Crystal, Gem, and Metal Magick, by Scott Cunningham (was one of the first, before anything more occult was explored, started with crystals in my early youth)</li>
        <li>Buckland’s Blue Book</li>
    </ul>

    <StepInStone
        v-for="wxrd in newLondonStepWxrds"
        :uuid="wxrd.uuid"
        :wxrdvalue="wxrd.wxrdvalue"
        :wxrdtype = "wxrd.wxrdtype"
        :content = "wxrd.content"
        :related = "wxrd.related"
        :image = "wxrd.image"
    />

    <p>
        Madison saw the inclusion of Chaos Magick and Typhonian Currents and also a deepening of Thelema 
    </p>

    <p>
        The GARGANTUAN Hardcover Edition of Book Four was released about the same time the founding members arrived in Madison, and became a huge influence on all later thought (though admittedly Kenneth Anger's admonition at the legendary Disinfo Conference about "old aeon attitudes" towards the book were echoed by the members, the source material was absolutely fundamental to the establishement of the Traditions beginnings, tha TCT is QUASI-THELEMIC through and through)
    </p>
            
    <ul>
        <li>Book of Lies</li>
        <li>Prometheus Rising, by Robert Anton Wilson</li>
        <li>Cults of the Shadow</li>
        <li>Liber Null & Psychonaut</li>
        <li>Psybermagick</li>
        <li>Liber Chaos</li>
        <li>Liber Aleph</li>
        <li>AOS fulgur reprints</li>
    </ul>

    <StepInStone
        v-for="wxrd in madisonStepWxrds"
        :uuid="wxrd.uuid"
        :wxrdvalue="wxrd.wxrdvalue"
        :wxrdtype = "wxrd.wxrdtype"
        :content = "wxrd.content"
        :related = "wxrd.related"
        :image = "wxrd.image"
    />

    <p>
        Minneapolis continued the depths
    </p>
    <ul>
        <li>more AOS</li>
        <li>darker zines from Magus Books</li>
        <li>Luciferian path stuff</li>
        <li>Behutet zine</li>
        <li>Clavicula Nox zine</li>
    </ul>


    <StepInStone
        v-for="wxrd in mplsStepWxrds"
        :uuid="wxrd.uuid"
        :wxrdvalue="wxrd.wxrdvalue"
        :wxrdtype = "wxrd.wxrdtype"
        :content = "wxrd.content"
        :related = "wxrd.related"
        :image = "wxrd.image"
    />

    <p>
        Waupaca refined the Pagan aspects
    </p>
    <p>
        more Runic studies
        more reconciliation with disparate traditions, ie. more syncretism
        birth of the Pandaemonic Musick Projeckt
        first seed form of the egregore .r..h..u. appears during intense periods of upheaval and awakening (details to be revealed only to properly vetted initiates, sensitive subject matter)
    </p>
    <p>
        Living in Aurora and spending lots of time in Chicago started to open me up to a wider spiritual world
    </p>
    <p>
        Occult Discussion Group Wednesday Nights at Occult Bookstore
        beginning of the TCT formulation with the establishment of the egregore .r..h..u. (the full 9-letter name is revealed only to initiates)



    </p>
</template>