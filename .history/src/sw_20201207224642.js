/**
 * /*
 *
 * @format
 * @Author: your name
 * @Date: 2020-12-07 22:46:35
 * @LastEditTime: 2020-12-07 22:46:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-webpack/src/sw.js
 */

/** @format */
workbox.core.skipWaiting()
workbox.core.clientsClaim()

self.addEventListener('push', event => {
  const title = 'Get Started With Workbox'
  const options = {
    body: event.data.text()
  }
  event.waitUntil(self.registration.showNotification(title, options))
})

workbox.precaching.precacheAndRoute(self.__precacheManifest)
