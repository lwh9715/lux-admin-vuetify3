<script setup lang="ts">
import { userList } from "@/api/userApi";
import { timestamp } from "@vueuse/core";

const query = reactive({
  keyword: "",
  type: "",
  page: 1,
  size: 7,
});

const fetchUserList = () => {
  userList(query).then((res) => {
    if (res.data.records) {
      desserts.value = res.data.records;
    }
  });
};

onMounted(() => {
  fetchUserList();
});

const dialog = ref(false);
const search = ref("");
const desserts = ref([]);
const rolesbg = ref(["primary", "secondary", "error", "success", "warning"]);
const refForm = ref();
const editedIndex = ref(-1);
const editedItem = ref({
  id: "",
  avatar: "1.jpg",
  account: "",
  email: "",
  phone: "",
  createTime: "",
  status: "",
  delFlag: "",
});

const defaultItem = ref({
  id: "",
  avatar: "",
  account: "",
  email: "",
  phone: "",
  createTime: "",
  status: "",
  delFlag: "",
});

const nameRules = [
  (v) => !!v || "Name is required",
  (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
];

//Methods
const filteredList = computed(() => {
  console.log(timestamp(), "56");
  return desserts.value.filter((user: any) => {
    console.log(user, "34");
    return user.account.toLowerCase().includes(search.value.toLowerCase());
  });
});

function editItem(item: any) {
  editedIndex.value = desserts.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialog.value = true;
}

function deleteItem(item: any) {
  const index = desserts.value.indexOf(item);
  confirm("Are you sure you want to delete this item?") &&
    desserts.value.splice(index, 1);
  ``;
}

function close() {
  dialog.value = false;
  setTimeout(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  }, 300);
}

function save() {
  console.log(editedIndex.value, "123");

  // if (editedIndex.value > -1) {
  //   Object.assign(desserts.value[editedIndex.value], editedItem.value);
  // } else {
  //   desserts.value.push(editedItem.value);
  // }
  close();
}

//Computed Property
const formTitle = computed(() => {
  return editedIndex.value === -1 ? "New Contact" : "Edit Contact";
});
</script>
<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-row>
          <v-col cols="12" lg="4" md="6">
            <v-text-field density="compact" v-model="search" label="Search Contacts" hide-details variant="outlined" color="primary"></v-text-field>
          </v-col>
          <v-col cols="12" lg="8" md="6" class="text-right">
            <v-dialog v-model="dialog" max-width="700">
              <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props" flat class="ml-auto">
                  <v-icon class="mr-2">mdi-account-multiple-plus</v-icon>
                  Add Contact
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="pa-4 bg-secondary">
                  <span class="title text-white">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-form class="mt-5" ref="form" v-model="refForm" lazy-validation>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field variant="outlined" color="primary" density="compact" v-model="editedItem.id" label="Id"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field variant="outlined" color="primary" density="compact" :counter="10" required v-model="editedItem.account" label="User info"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field variant="outlined" color="primary" density="compact" v-model="editedItem.email" label="User email" type="email"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field variant="outlined" color="primary" density="compact" v-model="editedItem.phone" label="Phone" type="phone"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field variant="outlined" color="primary" density="compact" v-model="editedItem.createTime" label="Joining Date"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field variant="outlined" color="primary" density="compact" v-model="editedItem.status" label="Role"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12">
                        <v-select variant="outlined" color="primary" density="compact" :items="rolesbg" v-model="editedItem.delFlag" label="Role Background"></v-select>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="pa-4">
                  <v-spacer></v-spacer>
                  <v-btn color="error" @click="close">Cancel</v-btn>
                  <v-btn color="secondary" :disabled="editedItem.account == '' || editedItem.email == ''" variant="flat" @click="save">Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card class="mt-2">
      <v-table class="mt-5">
        <thead>
          <tr>
            <th class="text-subtitle-1 font-weight-semibold">Id</th>
            <th class="text-subtitle-1 font-weight-semibold">UserInfo</th>
            <th class="text-subtitle-1 font-weight-semibold">Phone</th>
            <th class="text-subtitle-1 font-weight-semibold">Joining Date</th>
            <th class="text-subtitle-1 font-weight-semibold">Role</th>
            <th class="text-subtitle-1 font-weight-semibold">Actions</th>
          </tr>
        </thead>
        <tbody class="text-body-1">
          <tr v-for="item in filteredList" :key="item.id">
            <td class="font-weight-bold">{{ item.id }}</td>
            <td>
              <div class="d-flex align-center py-1">
                <div>
                  <v-img :src="item.avatar" width="40" class="rounded-circle img-fluid"></v-img>
                </div>

                <div class="ml-5">
                  <p class="font-weight-bold">{{ item.account }}</p>
                  <span class="d-block mt-1 text-caption textSecondary">{{ item.email }}</span>
                </div>
              </div>
            </td>
            <td>{{ item.phone }}</td>
            <td>{{ item.createTime }}</td>
            <td>
              <v-chip class="font-weight-bold" :color="item.delFlag" size="small" label>{{ item.status }}</v-chip>
            </td>
            <td>
              <div class="d-flex align-center">
                <v-tooltip text="Edit">
                  <template v-slot:activator="{ props }">
                    <v-btn color="blue" icon variant="text" @click="editItem(item)" v-bind="props">
                      <v-icon>mdi-pencil-outline</v-icon>
                    </v-btn>
                  </template>
                </v-tooltip>
                <v-tooltip text="Delete">
                  <template v-slot:activator="{ props }">
                    <v-btn icon variant="text" @click="deleteItem(item)" v-bind="props" color="error">
                      <v-icon>mdi-delete-outline</v-icon>
                    </v-btn>
                  </template>
                </v-tooltip>
              </div>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>
