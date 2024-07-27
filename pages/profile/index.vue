<script setup lang="ts"></script>

<template>
  <div class="flex justify-center bg-off-white h-fit pb-6">
    <div class="grid grid-cols-3 gap-6 bg-off-white">
      <div class="bg-white p-20 flex justify-center rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="308"
          height="632"
          fill="none"
          viewBox="0 0 308 632"
          class="self-center"
        >
          <path
            stroke="#737373"
            d="M1 54.5C1 24.953 24.953 1 54.5 1h199C283.047 1 307 24.953 307 54.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523Z"
          />
          <path
            fill="#fff"
            stroke="#737373"
            d="M12 55.5C12 30.923 31.923 11 56.5 11h24C86.851 11 92 16.149 92 22.5c0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195C31.923 621 12 601.077 12 576.5v-521Z"
          />
          <circle cx="153.5" cy="112" r="48" fill="#EEE" />
          <rect width="160" height="16" x="73.5" y="185" fill="#EEE" rx="8" />
          <rect width="72" height="8" x="117.5" y="214" fill="#EEE" rx="4" />
          <rect width="237" height="44" x="35" y="278" fill="#EEE" rx="8" />
          <rect width="237" height="44" x="35" y="342" fill="#EEE" rx="8" />
          <rect width="237" height="44" x="35" y="406" fill="#EEE" rx="8" />
          <rect width="237" height="44" x="35" y="470" fill="#EEE" rx="8" />
          <rect width="237" height="44" x="35" y="534" fill="#EEE" rx="8" />
        </svg>
      </div>
      <div class="bg-white flex flex-col col-span-2 rounded-xl p-10 gap-10">
        <div>
          <h3 class="text-3xl font-instrument-bold text-dark-grey">
            Profile Details
          </h3>
          <p class="text-light-grey text-xs">
            Add your details to create a personal touch to your profile.
          </p>
        </div>
        <AltButton state="active">+ Add new link</AltButton>
        <div class="flex flex-col self-center gap-6 text-center p-5 rounded-xl">
          <div class="flex flex-col gap-6">
            <div class="flex bg-off-white rounded-xl p-5 justify-center">
              <p class="text-light-grey p-6 self-center text-left">
                Profile picture
              </p>
              <UploadImageVue />
              <div class="flex flex-col gap-0.5 self-center p-6 text-left">
                <p class="text-light-grey text-xs">
                  Image must be below 1024x1024px.
                </p>
                <p class="text-light-grey text-xs">Use PNG or JPG format.</p>
              </div>
            </div>

            <div class="flex flex-col bg-off-white rounded-xl gap-3 p-5">
              <div class="flex justify-between items-center">
                <p
                  class="text-light-grey p-6 self-center text-left text-nowrap"
                >
                  First Name*
                </p>
                <div class="w-3/4">
                  <InputVue placeholder="e.g. Chris" type="text" />
                </div>
              </div>
              <div class="flex justify-between items-center">
                <p
                  class="text-light-grey p-6 self-center text-left text-nowrap"
                >
                  Last Name*
                </p>
                <div class="w-3/4">
                  <InputVue placeholder="e.g. Smith" type="text" />
                </div>
              </div>
              <div class="flex justify-between items-center">
                <p class="text-light-grey p-6 self-center text-left">Email</p>
                <div class="w-3/4">
                  <InputVue placeholder="e.g. chris@example.com" type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
