<template>
  <q-page class="q-pa-sm">
    <q-card class="q-mt-sm">
      <q-card-section>
        <div class="text-h6">Admin page</div>
      </q-card-section>
      <q-btn
        v-if="user.type == 'admin'"
        class="fredoka"
        color="primary"
        label="New User add"
        rounded
        type="submit"
        @click="GotoAdd"
      ></q-btn>
      <div class="q-pa-md" v-if="this.users">
        <q-table
          title="Treats"
          :rows="users"
          :columns="columns"
          row-key="name"
        />
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { useAuthStore, useAdminStore } from "src/stores/all.js";
import { computed } from "vue";
import { useRouter } from "vue-router";
const $router = useRouter();

const authStore = useAuthStore();
const adminStore = useAdminStore();

const userToken = computed(() => authStore.getUserToken);
const user = computed(() => authStore.getUser);
const users = computed(() => adminStore.getUsers);

// This request is to be intercepted when the token is invalid
authStore.GET_USER(userToken.value);
adminStore.GET_ALL_USER(userToken.value);

const GotoAdd = () => {
  $router.push("/admin/useradd");
};
const columns = [
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.name,
    sortable: true,
  },
  {
    name: "email",
    required: true,
    label: "Email",
    align: "left",
    field: (row) => row.email,
    sortable: true,
  },
  {
    name: "type",
    required: true,
    label: "User type",
    align: "left",
    field: (row) => row.type,
    sortable: true,
  },
  {
    name: "date_of_birth",
    required: true,
    label: "DOB",
    align: "left",
    field: (row) => row.date_of_birth,
    sortable: true,
  },
];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
];
</script>
