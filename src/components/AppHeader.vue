<template>
  <header>
    <v-app-bar
      app
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Project Name</v-toolbar-title>
      <v-tabs>
        <v-tab
          v-for="(menuItem, index) in menuItems"
          :key="index"
          :to="menuItem.url"
        >
          {{ menuItem.name }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list nav dense>
        <div v-for="(menuItem, i) in menuItems" :key="i">

          <v-list-item
            v-if="!menuItem.subLinks"
            :to="menuItem.url"
            :active-class="color"
            avatar
            class="v-list-item"
          >
            <!-- <v-list-item-icon>
              <v-icon>{{ menuItem.icon }}</v-icon>
            </v-list-item-icon> -->

            <v-list-item-title v-text="menuItem.name" />
          </v-list-item>

          <v-list-group
            v-else
            :key="menuItem.name"
            no-action
            :value="false"
          >
            <template v-slot:activator>
              <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
            </template>

            <v-list-item
              v-for="sublink in menuItem.subLinks"
              :to="sublink.url"
              :key="sublink.name"
            >
              <!-- <v-list-item-icon>
                <v-icon>{{ sublink.icon }}</v-icon>
              </v-list-item-icon> -->
              <v-list-item-title>{{ sublink.name }}</v-list-item-title>

            </v-list-item>

          </v-list-group>

        </div>

      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
import constants from '../common/constants'

export default {
  name: 'AppHeader',
  data () {
    return {
      drawer: false,
      menuItems: constants.menuItems,
      menuMails: constants.menuMails,
      menuExts: constants.menuExts
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/styles/common/common.scss";

.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}

.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}

.v-tabs {
  display: none;

  @include display_pc {
    display: block !important;
  }
}
</style>
