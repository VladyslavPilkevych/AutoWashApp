import { reactive } from 'vue';
import { defineStore } from 'pinia'

export const useUserReservationDataStore = defineStore('userActiveDateTime', () => {
  const userActiveDateTime = reactive({
    address: null,
    phone: null,
    date: null,
    time: null,
  })
  function setUserReservationData({ address, phone, date, time }) {
    userActiveDateTime.address = address;
    userActiveDateTime.phone = phone;
    userActiveDateTime.date = date;
    userActiveDateTime.time = time;
  }

  return { userActiveDateTime, setUserReservationData }
})
