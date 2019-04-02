<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>
    
    <md-list :md-expand-single="true">
      <side-bar>
        <mobile-menu slot="content"></mobile-menu>
        <sidebar-link to="/dashboard">
          <md-icon>dashboard</md-icon>
          <p>Dashboard</p>
        </sidebar-link>

        <md-list-item md-expand>
          <md-icon>whatshot</md-icon>
          <p style="color: white">Data Master</p>
          <md-list slot="md-expand">
            <sidebar-link to="/user">
              <md-icon>person</md-icon>
              <p>Role</p>
            </sidebar-link>

            <md-list :md-expand-single="reg">
              <md-list-item md-expand>
                <md-icon>whatshot</md-icon>
                <p style="color: white">Region</p>
                <md-list slot="md-expand">
                  <sidebar-link to="/lihatRegion">
                    <md-icon>location_on</md-icon>
                    <p>List of Region</p>
                  </sidebar-link>
                  <sidebar-link to="/addreg">
                    <md-icon>location_on</md-icon>
                    <p>Add New Region</p>
                  </sidebar-link>
                </md-list>
              </md-list-item>
            </md-list>

            <sidebar-link to="/typography">
              <md-icon>cloud_upload</md-icon>
              <p>File</p>
            </sidebar-link>

            <md-list :md-expand-single="chr">
              <md-list-item md-expand>
                <md-icon>whatshot</md-icon>
                <p style="color: white">Church</p>
                <md-list slot="md-expand">
                  <sidebar-link to="/lihatChurch">
                    <md-icon>bubble_chart</md-icon>
                    <p>List of Church</p>
                  </sidebar-link>
                  <sidebar-link to="/addchurch">
                    <md-icon>bubble_chart</md-icon>
                    <p>Add New Church</p>
                  </sidebar-link>
                </md-list>
              </md-list-item>
            </md-list>

            <sidebar-link to="/maps">
              <md-icon>person</md-icon>
              <p>User</p>
            </sidebar-link>

            <md-list :md-expand-single="bpt">
              <md-list-item md-expand>
                <md-icon>whatshot</md-icon>
                <p style="color: white">Baptis</p>
                <md-list slot="md-expand">
                  <sidebar-link to="/lihatBaptism">
                    <md-icon>notifications</md-icon>
                    <p>List of Baptism</p>
                  </sidebar-link>
                  <sidebar-link to="/baptism">
                    <md-icon>notifications</md-icon>
                    <p>Add New Baptism</p>
                  </sidebar-link>
                </md-list>
              </md-list-item>
            </md-list>

            <md-list :md-expand-single="chr">
              <md-list-item md-expand>
                <md-icon>whatshot</md-icon>
                <p style="color: white">Wedding</p>
                <md-list slot="md-expand">
                  <sidebar-link to="/lihatwedding">
                    <md-icon>unarchive</md-icon>
                    <p>List of Wedding</p>
                  </sidebar-link>
                  <sidebar-link to="/tambahwedding">
                    <md-icon>unarchive</md-icon>
                    <p>Add New Wedding</p>
                  </sidebar-link>
                </md-list>
              </md-list-item>
            </md-list>

            <md-list :md-expand-single="bpt">
              <md-list-item md-expand>
                <md-icon>whatshot</md-icon>
                <p style="color: white">Dead</p>
                <md-list slot="md-expand">
                  <sidebar-link to="/lihatDead">
                    <md-icon>unarchive</md-icon>
                    <p>List of Dead</p>
                  </sidebar-link>
                  <sidebar-link to="/tambahDead">
                    <md-icon>unarchive</md-icon>
                    <p>Add Dead</p>
                  </sidebar-link>
                </md-list>
              </md-list-item>
            </md-list>

            <md-list :md-expand-single="bpt">
              <md-list-item md-expand>
                <md-icon>whatshot</md-icon>
                <p style="color: white">News</p>
                <md-list slot="md-expand">
                  <sidebar-link to="/lihatNews">
                    <md-icon>unarchive</md-icon>
                    <p>List of News</p>
                  </sidebar-link>
                  <sidebar-link to="/tambahNews">
                    <md-icon>unarchive</md-icon>
                    <p>Add New News</p>
                  </sidebar-link>
                </md-list>
              </md-list-item>
            </md-list>
  
            <md-list :md-expand-single="bpt">
              <md-list-item md-expand>
                <md-icon>whatshot</md-icon>
                <p style="color: white">Announcement</p>
                <md-list slot="md-expand">
                  <sidebar-link to="/lihatAnnouncement">
                    <md-icon>unarchive</md-icon>
                    <p>List of Announcement</p>
                  </sidebar-link>
                  <sidebar-link to="/tambahAnnouncement">
                    <md-icon>unarchive</md-icon>
                    <p>Add New Announcement</p>
                  </sidebar-link>
                </md-list>
              </md-list-item>
            </md-list>

            <md-list :md-expand-single="bpt">
              <md-list-item md-expand>
                <md-icon>whatshot</md-icon>
                <p style="color: white">Reflection</p>
                <md-list slot="md-expand">
                  <sidebar-link to="/lihatReflection">
                    <md-icon>unarchive</md-icon>
                    <p>List of Reflection</p>
                  </sidebar-link>
                  <sidebar-link to="/tambahReflection">
                    <md-icon>unarchive</md-icon>
                    <p>Add New Reflection</p>
                  </sidebar-link>
                </md-list>
              </md-list-item>
            </md-list>

            <md-list :md-expand-single="bpt">
              <md-list-item md-expand>
                <md-icon>whatshot</md-icon>
                <p style="color: white">Testimonies</p>
                <md-list slot="md-expand">
                  <sidebar-link to="/lihatTestimony">
                    <md-icon>unarchive</md-icon>
                    <p>List of Testimonies</p>
                  </sidebar-link>
                  <sidebar-link to="/tambahTestimony">
                    <md-icon>unarchive</md-icon>
                    <p>Add New Testimonies</p>
                  </sidebar-link>
                </md-list>
              </md-list-item>
            </md-list>

            <md-list :md-expand-single="bpt">
              <md-list-item md-expand>
                <md-icon>whatshot</md-icon>
                <p style="color: white">Worship Schedule</p>
                <md-list slot="md-expand">
                  <sidebar-link to="/lihatWorshipSchedule">
                    <md-icon>unarchive</md-icon>
                    <p>List of Worship Schedule</p>
                  </sidebar-link>
                  <sidebar-link to="/tambahWorshipSchedule">
                    <md-icon>unarchive</md-icon>
                    <p>Add New Worship Schedule</p>
                  </sidebar-link>
                </md-list>
              </md-list-item>
            </md-list>

            <md-list :md-expand-single="bpt">
              <md-list-item md-expand>
                <md-icon>whatshot</md-icon>
                <p style="color: white">Event</p>
                <md-list slot="md-expand">
                  <sidebar-link to="/lihatEvent">
                    <md-icon>unarchive</md-icon>
                    <p>List of Event</p>
                  </sidebar-link>
                  <sidebar-link to="/tambahEvent">
                    <md-icon>unarchive</md-icon>
                    <p>Add New Event</p>
                  </sidebar-link>
                </md-list>
              </md-list-item>
            </md-list>

            <md-list :md-expand-single="bpt">
              <md-list-item md-expand>
                <md-icon>whatshot</md-icon>
                <p style="color: white">Sermon</p>
                <md-list slot="md-expand">
                  <sidebar-link to="/lihatSermon">
                    <md-icon>unarchive</md-icon>
                    <p>List of Sermon</p>
                  </sidebar-link>
                  <sidebar-link to="/tambahSermon">
                    <md-icon>unarchive</md-icon>
                    <p>Add New Sermon</p>
                  </sidebar-link>
                </md-list>
              </md-list-item>
            </md-list>

            <md-list :md-expand-single="bpt">
              <md-list-item md-expand>
                <md-icon>whatshot</md-icon>
                <p style="color: white">Song</p>
                <md-list slot="md-expand">
                  <sidebar-link to="/lihatSong"> 
                    <md-icon>unarchive</md-icon>
                    <p>List of Song</p>
                  </sidebar-link>
                  <sidebar-link to="/tambahSong"> 
                    <md-icon>unarchive</md-icon>
                    <p>Add New Song</p>
                  </sidebar-link>
                </md-list>
              </md-list-item>
            </md-list>
          </md-list>
        </md-list-item>

        <md-list-item md-expand>
          <md-icon>whatshot</md-icon>
          <p style="color: white">Transaction</p>
          <md-list slot="md-expand">
            <md-list :md-expand-single="trs">
              <md-list-item md-expand>
                <md-icon>whatshot</md-icon>
                <p style="color: white">Collection</p>
                <md-list slot="md-expand">
                  <sidebar-link to="/lihatCollection">
                    <md-icon>unarchive</md-icon>
                    <p>List of Collection</p>
                  </sidebar-link>
                  <sidebar-link to="/tambahCollection">
                    <md-icon>unarchive</md-icon>
                    <p>Add New Collection</p>
                  </sidebar-link>
                </md-list>
              </md-list-item>
            </md-list>

            <md-list :md-expand-single="trs">
              <md-list-item md-expand>
                <md-icon>whatshot</md-icon>
                <p style="color: white">Expense</p>
                <md-list slot="md-expand">
                  <sidebar-link to="/lihatExpense">
                    <md-icon>unarchive</md-icon>
                    <p>List of Expense</p>
                  </sidebar-link>
                  <sidebar-link to="/tambahExpense">
                    <md-icon>unarchive</md-icon>
                    <p>Add New Expense</p>
                  </sidebar-link>
                </md-list>
              </md-list-item>
            </md-list>

            <md-list :md-expand-single="trs">
              <md-list-item md-expand>
                <md-icon>whatshot</md-icon>
                <p style="color: white">Tithe</p>
              <md-list slot="md-expand">
                <sidebar-link to="/lihatTithe">
                  <md-icon>unarchive</md-icon>
                  <p>List of Tithe</p>
                </sidebar-link>
                <sidebar-link to="/tambahTithe">
                  <md-icon>unarchive</md-icon>
                  <p>Add New Tithe</p>
                </sidebar-link>
              </md-list>
              </md-list-item>
            </md-list>

          </md-list>
        </md-list-item>

        <md-list-item md-expand>
          <md-icon>whatshot</md-icon>
          <p style="color: white">Laporan</p>
          <md-list slot="md-expand">
            <sidebar-link to="/laporanKeuangan">
              <md-icon>unarchive</md-icon>
              <p>Laporan Keuangan</p>
            </sidebar-link>
          </md-list>
        </md-list-item>
      </side-bar>
    </md-list>
    

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
  import TopNavbar from "./TopNavbar.vue";
  import ContentFooter from "./ContentFooter.vue";
  import DashboardContent from "./Content.vue";
  import MobileMenu from "@/pages/Layout/MobileMenu.vue";

  export default {
    components: {
      TopNavbar,
      DashboardContent,
      ContentFooter,
      MobileMenu
    }
  };
</script>

<style lang="scss" scoped>
  $list-width: 320px;

  .full-control {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
  }

  .list {
    width: $list-width;
  }

  .full-control > .md-list {
    width: $list-width;
    max-width: 100%;
    height: 400px;
    display: inline-block;
    overflow: auto;
    border: 1px solid rgba(#000, .12);
    vertical-align: top;
  }

  .control {
    min-width: 250px;
    display: flex;
    flex-direction: column;
    padding: 16px;
  }
</style>