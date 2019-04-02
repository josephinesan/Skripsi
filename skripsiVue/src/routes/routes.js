import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import LihatRegion from "@/pages/Region/LihatRegion.vue";
import Typography from "@/pages/Typography.vue";
import LihatChurch from "@/pages/Church/LihatChurch.vue";
import Maps from "@/pages/Maps.vue";
import LihatBaptism from "@/pages/Baptis/LihatBaptis.vue";
import LihatWedding from "@/pages/Wedding/LihatWedding.vue";
import LihatDead from "@/pages/Dead/LihatDead.vue";
import LihatCollection from "@/pages/Collection/LihatCollection.vue";
import LihatExpense from "@/pages/Expense/LihatExpense.vue";
import LihatTithe from "@/pages/Tithe/LihatTithe.vue";
import LihatNews from "@/pages/News/LihatNews.vue";
import LihatAnnouncement from "@/pages/Announcement/LihatAnnouncement.vue";
import LihatReflection from "@/pages/Reflection/LihatReflection.vue";
import LihatTestimony from "@/pages/Testimony/LihatTestimony.vue";
import LihatWorshipSchedule from "@/pages/WorshipSchedule/LihatWorshipS.vue";
import LihatEventG from "@/pages/Event/LihatEvent.vue";
import LihatSermon from "@/pages/Sermon/LihatSermon.vue";
import LihatSong from "@/pages/Song/LihatSong.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "lihatRegion",
        name: "List of Region",
        component: LihatRegion
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "lihatChurch",
        name: "List of Church",
        component: LihatChurch
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "lihatBaptism",
        name: "List of Baptism",
        component: LihatBaptism
      },
      {
        path: "lihatWedding",
        name: "List of Wedding",
        component: LihatWedding
      },
      {
        path: "lihatDead",
        name: "List of Dead",
        component: LihatDead
      },
      {
        path: "lihatCollection",
        name: "Lihat Collection",
        component: LihatCollection
      },
      {
        path: "lihatExpense",
        name: "List of Expense",
        component: LihatExpense
      },
      {
        path: "lihatTithe",
        name: "List of Tithe",
        component: LihatTithe
      },
      {
        path: "lihatNews",
        name: "List of News",
        component: LihatNews
      },
      {
        path: "lihatAnnouncement",
        name: "List of Announcement",
        component: LihatAnnouncement
      },
      {
        path: "lihatReflection",
        name: "List of Reflection",
        component: LihatReflection
      },
      {
        path: "lihatTestimony",
        name: "List of Testimony",
        component: LihatTestimony
      },
      {
        path: "lihatWorshipSchedule",
        name: "List of Worship Schedule",
        component: LihatWorshipSchedule
      },
      {
        path: "lihatEvent",
        name: "List of Event",
        component: LihatEventG
      },
      {
        path: "lihatSermon",
        name: "List of Sermon",
        component: LihatSermon
      },
      {
        path: "lihatSong",
        name: "List of Song",
        component: LihatSong
      }
    ]
  }
];

export default routes;
