import React from "react";
import Searchbar, { SearchInput } from '../Navbar/components/Searchbar';
import SearchIcon from '../Navbar/components/SearchIcon';
import SubmitButton from '../Navbar/components/SubmitButton';

const Footer = () => {
  return (
    <>
      <div className="border-b-1 border-gray-500 bg-black text-white grid grid-cols-1 md:grid-cols-4 gap-8 pt-16 pb-24 px-16 items-center">
        {/* Column 1 */}
        <div className="w-full h-full">
          <div className="flex flex-col gap-4 justify-center">
            <h2 className="text-4xl">Stay Stylish, Stay Updated</h2>
            <p className="mb-8">Discover latest trends in fashion</p>
            <Searchbar className="flex gap-2 items-center rounded-4xl border-2 border-white px-3 py-1 relative overflow-hidden">
              <SearchInput
                placeholder="Enter your email..."
                className="bg-transparent p-2 outline-none text-white placeholder:text-white flex-1 "
              />
              <SubmitButton
                className="rounded-full p-3 bg-white text-black absolute right-1"
              />
            </Searchbar>
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-full h-full">
          <div className="flex flex-col gap-4 justify-center">
            <h2 className="text-xl font-bold">About Us</h2>
            <p>Contact Us</p>
            <p>Our Branches</p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="w-full h-full">
          <div className="flex flex-col gap-4 justify-center">
            <h2 className="text-xl font-bold">Policies</h2>
            <p>Exchange and Return Policy</p>
            <p>Shipping Policy</p>
          </div>
        </div>

        {/* Column 4 */}
        <div className="w-full h-full">
          <div className="flex flex-col gap-4 justify-center">
            <h2 className="text-xl font-bold">Top Branches</h2>
            <p>Madinaty - Open Air Mall</p>
            <p>6th of October - Mall of Arabia</p>
            <p>Riyadh - Park Avenue Mall</p>
          </div>
        </div>
      </div>

      {/* Payment methods section */}
      <div className="bg-black flex gap-2 pt-8 pb-16 px-8 items-start flex-wrap">
        <svg
          class="payment-icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          x="0"
          y="0"
          width="38"
          height="24"
          viewBox="0 0 165.521 105.965"
          xml:space="preserve"
          aria-labelledby="pi-apple_pay"
        >
          <title id="pi-apple_pay">Apple Pay</title>
          <path
            fill="#000"
            d="M150.698 0H14.823c-.566 0-1.133 0-1.698.003-.477.004-.953.009-1.43.022-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.932 9.932 0 0 0-4.35 4.35 10.463 10.463 0 0 0-.975 2.96C.113 9.611.052 10.658.024 11.696a70.22 70.22 0 0 0-.022 1.43C0 13.69 0 14.256 0 14.823v76.318c0 .567 0 1.132.002 1.699.003.476.009.953.022 1.43.028 1.036.09 2.084.275 3.11a10.46 10.46 0 0 0 .974 2.96 9.897 9.897 0 0 0 1.83 2.52 9.874 9.874 0 0 0 2.52 1.83c.947.483 1.917.79 2.96.977 1.025.183 2.073.245 3.112.273.477.011.953.017 1.43.02.565.004 1.132.004 1.698.004h135.875c.565 0 1.132 0 1.697-.004.476-.002.952-.009 1.431-.02 1.037-.028 2.085-.09 3.113-.273a10.478 10.478 0 0 0 2.958-.977 9.955 9.955 0 0 0 4.35-4.35c.483-.947.789-1.917.974-2.96.186-1.026.246-2.074.274-3.11.013-.477.02-.954.022-1.43.004-.567.004-1.132.004-1.699V14.824c0-.567 0-1.133-.004-1.699a63.067 63.067 0 0 0-.022-1.429c-.028-1.038-.088-2.085-.274-3.112a10.4 10.4 0 0 0-.974-2.96 9.94 9.94 0 0 0-4.35-4.35A10.52 10.52 0 0 0 156.939.3c-1.028-.185-2.076-.246-3.113-.274a71.417 71.417 0 0 0-1.431-.022C151.83 0 151.263 0 150.698 0z"
          ></path>
          <path
            fill="#FFF"
            d="M150.698 3.532l1.672.003c.452.003.905.008 1.36.02.793.022 1.719.065 2.583.22.75.135 1.38.34 1.984.648a6.392 6.392 0 0 1 2.804 2.807c.306.6.51 1.226.645 1.983.154.854.197 1.783.218 2.58.013.45.019.9.02 1.36.005.557.005 1.113.005 1.671v76.318c0 .558 0 1.114-.004 1.682-.002.45-.008.9-.02 1.35-.022.796-.065 1.725-.221 2.589a6.855 6.855 0 0 1-.645 1.975 6.397 6.397 0 0 1-2.808 2.807c-.6.306-1.228.511-1.971.645-.881.157-1.847.2-2.574.22-.457.01-.912.017-1.379.019-.555.004-1.113.004-1.669.004H14.801c-.55 0-1.1 0-1.66-.004a74.993 74.993 0 0 1-1.35-.018c-.744-.02-1.71-.064-2.584-.22a6.938 6.938 0 0 1-1.986-.65 6.337 6.337 0 0 1-1.622-1.18 6.355 6.355 0 0 1-1.178-1.623 6.935 6.935 0 0 1-.646-1.985c-.156-.863-.2-1.788-.22-2.578a66.088 66.088 0 0 1-.02-1.355l-.003-1.327V14.474l.002-1.325a66.7 66.7 0 0 1 .02-1.357c.022-.792.065-1.717.222-2.587a6.924 6.924 0 0 1 .646-1.981c.304-.598.7-1.144 1.18-1.623a6.386 6.386 0 0 1 1.624-1.18 6.96 6.96 0 0 1 1.98-.646c.865-.155 1.792-.198 2.586-.22.452-.012.905-.017 1.354-.02l1.677-.003h135.875"
          ></path>
          <g>
            <g>
              <path
                fill="#000"
                d="M43.508 35.77c1.404-1.755 2.356-4.112 2.105-6.52-2.054.102-4.56 1.355-6.012 3.112-1.303 1.504-2.456 3.959-2.156 6.266 2.306.2 4.61-1.152 6.063-2.858"
              ></path>
              <path
                fill="#000"
                d="M45.587 39.079c-3.35-.2-6.196 1.9-7.795 1.9-1.6 0-4.049-1.8-6.698-1.751-3.447.05-6.645 2-8.395 5.1-3.598 6.2-.95 15.4 2.55 20.45 1.699 2.5 3.747 5.25 6.445 5.151 2.55-.1 3.549-1.65 6.647-1.65 3.097 0 3.997 1.65 6.696 1.6 2.798-.05 4.548-2.5 6.247-5 1.95-2.85 2.747-5.6 2.797-5.75-.05-.05-5.396-2.101-5.446-8.251-.05-5.15 4.198-7.6 4.398-7.751-2.399-3.548-6.147-3.948-7.447-4.048"
              ></path>
            </g>
            <g>
              <path
                fill="#000"
                d="M78.973 32.11c7.278 0 12.347 5.017 12.347 12.321 0 7.33-5.173 12.373-12.529 12.373h-8.058V69.62h-5.822V32.11h14.062zm-8.24 19.807h6.68c5.07 0 7.954-2.729 7.954-7.46 0-4.73-2.885-7.434-7.928-7.434h-6.706v14.894z"
              ></path>
              <path
                fill="#000"
                d="M92.764 61.847c0-4.809 3.665-7.564 10.423-7.98l7.252-.442v-2.08c0-3.04-2.001-4.704-5.562-4.704-2.938 0-5.07 1.507-5.51 3.82h-5.252c.157-4.86 4.731-8.395 10.918-8.395 6.654 0 10.995 3.483 10.995 8.89v18.663h-5.38v-4.497h-.13c-1.534 2.937-4.914 4.782-8.579 4.782-5.406 0-9.175-3.222-9.175-8.057zm17.675-2.417v-2.106l-6.472.416c-3.64.234-5.536 1.585-5.536 3.95 0 2.288 1.975 3.77 5.068 3.77 3.95 0 6.94-2.522 6.94-6.03z"
              ></path>
              <path
                fill="#000"
                d="M120.975 79.652v-4.496c.364.051 1.247.103 1.715.103 2.573 0 4.029-1.09 4.913-3.899l.52-1.663-9.852-27.293h6.082l6.863 22.146h.13l6.862-22.146h5.927l-10.216 28.67c-2.34 6.577-5.017 8.735-10.683 8.735-.442 0-1.872-.052-2.261-.157z"
              ></path>
            </g>
          </g>
        </svg>
        <svg
          class="payment-icon"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="pi-american_express"
          viewBox="0 0 38 24"
          width="38"
          height="24"
        >
          <title id="pi-american_express">American Express</title>
          <path
            fill="#000"
            d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z"
            opacity=".07"
          ></path>
          <path
            fill="#006FCF"
            d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"
          ></path>
          <path
            fill="#FFF"
            d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"
          ></path>
          <path
            fill="#006FCF"
            d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"
          ></path>
          <path
            fill="#006FCF"
            d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"
          ></path>
          <path
            fill="#FFF"
            d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"
          ></path>
          <path
            fill="#006FCF"
            d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"
          ></path>
          <path
            fill="#006FCF"
            d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"
          ></path>
        </svg>
        <svg
          class="payment-icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          viewBox="0 0 38 24"
          xml:space="preserve"
          width="38"
          height="24"
          role="img"
          aria-labelledby="pi-mada"
        >
          <title id="pi-mada">Mada</title>
          <path
            d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
            opacity=".07"
          ></path>
          <path
            d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
            fill="#fff"
          ></path>
          <path
            d="M11 7.2h6c.2 0 .3.1.3.3v3.7c0 .1-.1.2-.2.2H5.4c-.3 0-.4-.1-.4-.4V7.6c0-.3.1-.4.4-.4 1.8-.1 3.7-.1 5.6 0 0-.1 0 0 0 0z"
            fill="#15a2db"
          ></path>
          <path
            d="M11 12.7h5.8c.2 0 .3.1.3.3v3.5c0 .2-.1.2-.3.3H5.2c-.4 0-.5-.1-.5-.4V13c0-.3.1-.4.4-.4 2.1.1 4 .1 5.9.1z"
            fill="#88be44"
          ></path>
          <path
            d="M30.6 8.9v-1c.1-.3.2-.5.5-.6.4-.1.9-.2 1.4-.1.6.1.9.5 1.1 1 .3.7.1 1.4-.3 1.9-.3.4-.8.5-1.3.5-1.3-.1-2.6-.1-4-.1h-2c-.1 0-.2 0-.2-.2V10c0-.2.1-.3.3-.3h1.4c.1 0 .1-.1.1-.1V8.5c-.1-.4-.3-.6-.7-.7h-.6c-.2 0-.3-.1-.2-.3 0-.1 0-.2.1-.3 0-.1.1-.2.2-.2h.9c.7.1 1.2.5 1.3 1.2.1.3.1.6.1.9v.4c0 .2.1.2.2.2h1.4c.2 0 .2-.1.2-.2.1-.1.1-.4.1-.6zm.9 0v.7c0 .1 0 .2.1.2.4.2 1-.1 1.1-.5.1-.3.1-.6 0-.9-.1-.2-.2-.3-.4-.4h-.5c-.3 0-.4.1-.3.4v.5zM22.2 11h-2.1c-.4 0-.8-.1-1.1-.5l-.3-.6c-.1-.5-.1-.9 0-1.4.1-.7.6-1.2 1.4-1.2h1.2c.1 0 .1 0 .1.1v.3c-.1.2-.2.3-.4.3h-.8c-.4.1-.6.3-.6.6-.1.4-.1.7 0 1.1.1.4.3.6.7.6h3.9c.2-.1.3-.2.3-.4s-.1-.4-.3-.4h-1.4c-.8-.1-1.1-1-.7-1.7.1-.2.3-.3.6-.4.2-.1.5-.1.7-.1h2c.1 0 .2 0 .1.2v.3c0 .2-.1.3-.3.3h-2.1c0-.1-.1 0-.1.2s.1.4.4.4h.9c.2 0 .4 0 .6.1.5.2.8.6.7 1.1 0 .1 0 .2-.1.3-.1.4-.3.6-.7.7-.3.1-.6.1-.9.1h-1.7zm-3.6 4.3v-1.1c0-.3.1-.5.4-.5.5-.2 1-.2 1.5-.2.2 0 .3.1.4.1.1.1.2 0 .3 0 .4-.2.8-.2 1.2-.1.5.1.8.4.9.9v2.1c0 .2-.1.2-.2.2h-.5c-.2 0-.2-.1-.2-.2v-1.8c0-.4-.2-.5-.6-.5h-.1c-.2.1-.2.1-.2.3v2c0 .2-.1.2-.2.2h-.5c-.2 0-.2-.1-.2-.2v-1.7c0-.4-.4-.6-.8-.4-.1 0-.1.1-.1.2v1.9c0 .3-.1.3-.3.3H19c-.2 0-.2-.1-.2-.2v-.1c-.2-.5-.2-.9-.2-1.2zm11.7-1.1v1.9c0 .3-.1.5-.4.6-.5.1-1 .2-1.5.1s-.9-.4-1-1c-.1-.5-.1-.9 0-1.4.2-.6.8-1 1.5-.9.1 0 .2 0 .3.1.2 0 .2 0 .2-.2V12.5c0-.1.1-.2.2-.3.2 0 .3-.1.5-.1.1 0 .2 0 .2.2v1.9zm-1 .8v-.5c0-.1 0-.1-.1-.2-.3-.2-.8-.1-.9.2-.2.4-.2.8 0 1.1.2.4.5.5.9.4.1 0 .2-.1.1-.2V15zm-2.6.5v1c0 .2-.1.3-.2.2-.3-.1-.7-.1-1-.1s-.5.1-.8 0c-.4-.1-.8-.3-.9-.7-.2-.6.1-1.1.7-1.2.4-.1.7-.1 1.1-.1.2 0 .2 0 .2-.2s-.1-.4-.3-.4H25c-.2 0-.4.1-.6.1-.1 0-.3.1-.4-.1-.1-.1-.1-.3 0-.5l.1-.1c.5-.2 1.1-.3 1.7-.2h.2c.4.1.7.4.8.8v1c-.1.4-.1.5-.1.5zm-1.3-.1c-.2 0-.4 0-.5.1-.2.1-.2.2-.2.4s.1.3.3.3h.4c.3 0 .3-.1.4-.4 0-.4 0-.5-.4-.4zm8.3.1v1c0 .2-.1.2-.2.2-.4-.1-.9-.1-1.3 0-.3.1-.6 0-.9-.1-.3-.2-.5-.5-.5-.8 0-.4.1-.6.5-.8.3-.2.6-.2.9-.2h.5c.1 0 .1 0 .2-.1 0-.3-.1-.5-.4-.5-.3 0-.7 0-1 .1-.1 0-.1.1-.2.1s-.2 0-.2-.1V14c0-.1 0-.2.1-.2.6-.2 1.2-.3 1.8-.2.6.1.8.5.8 1.1-.1.2-.1.5-.1.8zm-.9.2v-.2c0-.1 0-.1-.1-.1h-.6c-.2.1-.4.2-.3.4 0 .2.2.3.4.3h.4c.1 0 .2-.1.2-.2v-.2z"
            fill="#262d35"
          ></path>
        </svg>
        <svg
          class="payment-icon"
          viewBox="0 0 38 24"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          width="38"
          height="24"
          aria-labelledby="pi-master"
        >
          <title id="pi-master">Mastercard</title>
          <path
            opacity=".07"
            d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
          ></path>
          <path
            fill="#fff"
            d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
          ></path>
          <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
          <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
          <path
            fill="#FF5F00"
            d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
          ></path>
        </svg>
        <svg
          class="payment-icon"
          viewBox="0 0 38 24"
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          width="38"
          height="24"
          role="img"
          aria-labelledby="pi-meeza"
        >
          <title id="pi-meeza">Meeza</title>
          <path
            fill="#FFF"
            d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
          ></path>
          <path
            opacity=".07"
            d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3zm0 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
          ></path>
          <path
            fill="#532A74"
            d="M19.7 7.2H21c.5 0 .8.3.9.8.1.3.1.5 0 .8-.1.4-.1.8-.1 1.2 0 1.1-.2 2.3-.1 3.4 0 .5.1.9.4 1.4s.7.7 1.3.6c.1-.3.1-.5.1-.8 0-1.5.1-3 .2-4.4 0-.7.1-1.5.1-2.2v-.4c0-.2.1-.3.4-.3h3.5c1.1 0 2 .9 2.3 1.6.2.5.2 1.1.2 1.7v.8c0 1.3-.1 2.7-.3 4-.2 1.3-.9 2.1-2.1 2.5-.1 0-.3.1-.4.1-.5.1-1.1 0-1.6 0s-.8-.3-1.2-.6c-.7.5-1.5.8-2.4.7-.9-.1-1.6-.5-2.2-1.2-.5.5-1 .9-1.6 1.1-.7.2-1.3 0-1.9-.2-.2.2-.1.4-.2.6 0 .5 0 1-.1 1.5 0 .4-.1.8-.5 1-.1 0-.1.1-.2.1-.4.1-.9.2-1.3.2-.3 0-.4-.2-.4-.5s.1-.6.1-.8c0-.8.1-1.7.1-2.5.1-1.7.2-3.3.3-5 0-.7.1-1.3.1-2 .1-.9.1-1.8.2-2.8 0-.4.1-.5.5-.5h.8c.6 0 1 .4 1 1v1.1c0 .8-.1 1.7-.1 2.5 0 .5-.1 1-.1 1.4 0 .5.1.9.3 1.3.4.7 1.2 1.1 2 .9.2-.1.4-.2.3-.5 0-.3-.1-.6-.1-.9 0-.8.1-1.7.1-2.5 0-.9.1-1.7.2-2.6 0-.4.1-.9.1-1.3 0 0 0-.1.1-.3m6.1 6.9v.6c0 .4.1.5.5.5h.8c.3 0 .5-.1.5-.5 0-.3 0-.6.1-.9 0-.7.1-1.5.1-2.2v-1.2c0-.3-.1-.5-.5-.5h-.9c-.4 0-.4 0-.5.4 0 1.3 0 2.5-.1 3.8M13.7 7.3c.1.1.1.3.1.4-.2 2.2-.3 4.4-.4 6.7 0 .7-.2 1.4-.5 2-.5.8-1.2 1.3-2.1 1.4-.6.1-1.1.1-1.7 0-.9-.1-1.5-.6-1.9-1.4-.3-.6-.4-1.3-.3-2 0-1.3.1-2.5.1-3.7 0-.6.1-1.1.3-1.6.6-1.1 1.5-1.9 2.8-1.9h3.2c.1 0 .2 0 .4.1m-4.5 6.6v.6c0 .5 0 .5.5.5h.8c.4 0 .5-.1.5-.5v-.3c0-1.2.1-2.3.2-3.5v-.4c0-.4-.1-.4-.4-.4h-.6c-.8 0-.8.1-.9.8 0 1.1-.1 2.1-.1 3.2"
          ></path>
          <path
            fill="#EC6A2B"
            d="M22.2 21.2c-.1-.1-.2-.2-.1-.3.1-.5 0-1 .1-1.4.1-.6.5-1 1.2-1h6.1c.2 0 .3.1.3.3v.4c-.1.4 0 .8-.1 1.2-.1.5-.5.8-1 .9h-6.1c-.2-.1-.3-.1-.4-.1"
          ></path>
          <path
            fill="#532A74"
            d="M20.4 6.3c-.1-.3 0-.5 0-.7v-1c0-.3-.2-.4-.4-.3-.1.1-.1.2-.1.3 0 .4 0 .8-.1 1.2v.4c-.2.1-.4.1-.7.1-.1-.3 0-.6 0-1 0-.2 0-.5.1-.7 0-.1 0-.2-.1-.3-.1-.1-.2-.1-.3-.1-.1 0-.1.1-.1.2 0 .5-.1 1-.1 1.5 0 .3-.1.3-.3.3-.4 0-.4 0-.4-.4 0-.6.1-1.3.1-1.9 0-.3.1-.4.4-.4h.5c.5.1 1 0 1.4 0h.5c.4.1.5.2.6.6v.6c0 .4-.1.8-.1 1.2 0 .3-.1.4-.4.3-.3.1-.4.1-.5.1m-7-1.8c0 .4 0 .9-.2 1.3s-.5.6-.9.6h-.4c-.4 0-.7-.2-.8-.6-.2-.6-.1-1.2.1-1.8.2-.3.5-.5.8-.5h.9c.4 0 .4.1.4.5.1.1.1.3.1.5m4.8 13.8h.4c.3 0 .5.2.5.5v.3c-.1.3-.1.7-.1 1 0 1-1.1 1.5-1.9 1-.2-.1-.3-.3-.4-.5-.1-.6-.1-1.2.2-1.7.1-.3.4-.4.6-.4.2-.2.5-.2.7-.2M9.9 3.5h.6c.2 0 .3.1.3.4 0 .5-.1 1.1-.2 1.6-.1.6-.5.9-1.1.9-.8 0-1.2-.4-1.2-1.3 0-.3.1-.6.2-.9.1-.4.4-.6.8-.7h.6m11.6 14.9c0 .1.1.1.1.1.1.7.1 1.3-.1 2s-1.2 1-1.9.5c-.3-.2-.4-.6-.4-.9 0-.4 0-.7.1-1.1s.4-.6.8-.7c.4 0 .9 0 1.4.1"
          ></path>
          <path
            fill="#EC6A2B"
            d="M15.4 3.5c.3 0 .6 0 .8.1.5.1.8.4.8.8.1.4 0 .9-.1 1.3s-.4.6-.7.6c-.4 0-.7.1-1-.1s-.5-.5-.6-.9c-.1-.5.1-1.1.1-1.6 0-.1.1-.2.2-.2h.5"
          ></path>
          <path
            fill="#532A74"
            d="M25.7 5.6c.1.2.1.4 0 .6 0 .1-.1.1-.3.1h-1c-.4 0-.6-.2-.7-.6-.1-.6 0-1.2.1-1.7.1-.3.3-.5.7-.5h.8c.2 0 .4.1.4.3.2.4.3.9.1 1.4-.4.1-.9 0-1.3.1-.1.2 0 .3.2.3h1m-.5-1c0-.3 0-.4-.3-.4-.2 0-.3.1-.3.4.2.1.4.1.6 0m3.4-.4c-.1-.2-.1-.4.1-.6.4-.1.9-.1 1.4 0 .3.1.5.3.5.6v1.6c0 .4-.2.5-.5.5h-1c-.4 0-.6-.2-.6-.6v-.1c0-.7.1-.9.8-1 .2 0 .3 0 .5-.1.1-.2 0-.3-.2-.3h-.4c-.3 0-.5.1-.6 0m.8 1.4c.2 0 .3-.1.3-.2 0-.2-.1-.2-.3-.2-.3 0-.4.1-.4.3.1.1.2.1.4.1m-7.1-.4c-.1.2 0 .3.2.4h.6c.2 0 .3.1.3.3 0 .2-.1.4-.3.4-.4 0-.8.1-1.2 0-.3 0-.4-.2-.5-.4-.2-.6-.1-1.2.1-1.8.1-.3.3-.5.7-.5h.8c.4.1.5.3.6.7V5c0 .2-.1.3-.3.3h-.5l-.5-.1zm.5-.6c0-.3 0-.4-.3-.4-.2 0-.3.1-.3.4.2.1.4 0 .6 0m4.4.9h.7c.2 0 .3.1.3.3 0 .3-.1.4-.2.5h-1.8c-.2-.2-.2-.4 0-.6.1-.2.3-.5.5-.7s.3-.4.5-.7c-.2-.1-.4-.1-.6-.1s-.3 0-.3-.2.1-.5.3-.5h1.5c.3 0 .4.1.3.4 0 .2-.1.3-.2.5-.5.3-.7.7-1 1.1"
          ></path>
        </svg>
        <svg
          class="payment-icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          role="img"
          viewBox="0 0 38 24"
          width="38"
          height="24"
          aria-labelledby="pi-omannet"
          xml:space="preserve"
        >
          <title id="pi-omannet">OmanNet</title>
          <path
            fill="#000"
            opacity=".07"
            d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
          ></path>
          <path
            fill="#fff"
            d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
          ></path>
          <g fill="#08a455">
            <circle cx="23.6" cy="7.2" r=".3"></circle>
            <path d="M22.2 7.9h-.1.7l-.1.1-.1.1c-.1.8.1 2.1 1.1 1.9.7-.2.8-1.4.7-1.9V8c-.1-.1-.1-.1 0-.1h.6c.1 0 .1 0 0 .1 0 .4 0 .9-.1 1.3-.4.8-1.5 1.1-2.2.4-.5-.5-.4-1.2-.4-1.8 0 0 0-.1-.1-.1zm-10.6 3.9c.8-.7 1.8-.7 2.4.1h.1c.3-.4.6-.6 1.1-.6 2.6-.2 1.1 3 1.9 3.2.1 0 .1.1.1.1 0 .1-.1.1-.1.1h-1.3c-.1 0-.1-.1-.1-.1 0-.1 0-.1.1-.1.4-.2.3-1.5.2-2-.1-.6-.4-.9-1-.8-.9.1-.8 1.4-.8 2.2 0 .3.1.5.3.7.1 0 .1.1 0 .2l-.1.1h-1.2c-.1 0-.1-.1-.1-.1 0-.1 0-.1.1-.1.2-.1.3-.3.3-.5V13c0-.5-.1-.9-.6-1.1-.7-.2-1.1.3-1.2 1-.1.6-.2 1.7.2 1.8.1 0 .1.1.1.1 0 .1-.1.1-.1.1h-1.2s-.1 0-.1-.1c-.1-.1 0-.2.1-.2 0 0 .1 0 .1-.1.3-.6.2-1.6.1-2.3 0-.1-.1-.3-.2-.3s-.1-.1-.1-.1 0-.1.1-.1l.8-.3c.1 0 .1 0 .1.1v.4c0 .1 0 .1.1 0zm8.6 2.6c-.2.2-.4.3-.5.3-.7.2-1.8.1-2.2-.6-.4-.7.3-1.2 1-1.4.5-.1 1-.2 1.5-.2 0 0 .1 0 .1-.1.1-1.2-1.9-1.1-2.1-.2 0 .1-.1.1-.2.1s-.1 0-.1-.1l-.2-.6s0-.1.1-.1c1.2-.5 3.3-.8 3.3 1.2v.8c0 .4-.1.7.3.8.1 0 .1.1.1.2l-.1.1h-.7s-.1 0-.1-.1v-.3h-.1zm-.9.1c.8-.1.8-.8.9-1.4 0 0 0-.1-.1-.1-.5 0-1.8 0-1.8.8 0 .6.5.8 1 .7zm3.3-2.7c.6-.5 1.2-.6 1.9-.3.6.2.8.8.8 1.5a13 13 0 00.1 1.2c0 .2.1.3.3.3.1 0 .1.1.1.2s-.1.1-.1.1h-1.2c-.1 0-.1-.1-.1-.1 0-.1 0-.1.1-.1.2-.1.3-.2.3-.4v-1.7c-.1-.5-.4-.7-.9-.7-1 0-1 1.6-1 2.3 0 .2.1.4.3.5.1 0 .1.1.1.2l-.1.1H22c-.1 0-.1-.1-.1-.1s0-.1.1-.1c.2-.1.3-.3.3-.5 0-.7.1-1.4-.1-2a.2.2 0 00-.1-.1H22a.1.1 0 010-.2l.1-.1.8-.3s.1 0 .1.1v.3s0 .1.1 0z"></path>
          </g>
          <g fill="#e10f12">
            <circle cx="16.6" cy="6.8" r=".3"></circle>
            <circle cx="17.3" cy="6.8" r=".3"></circle>
            <circle cx="20.2" cy="6.8" r=".3"></circle>
            <path d="M20.8 9.3c-.2-.4-.1-1-.1-1.5a.2.2 0 00-.1-.1l-.1-.1.6-.1h.1c0 .7-.2 1.8.2 2.1h-5.2c-.5 0-.8 0-1-.1-.7-.3-.6-.8-.1-1.2.6-.4 1.2-.6 1.9-.4.1 0 .1 0 .1.1v.4c0 .1 0 .1-.1 0-.1-.2-.2-.3-.4-.4-1.2-.4-2 1.2-.6 1.3.8.1 1.6.1 2.3 0 0 0 .1 0 .1-.1V7.8s0-.1-.1-.1l-.1-.1.6-.1h.1v1.8s0 .1.1.1h1.9c.1 0 .1 0 0-.1zm15.6 2.3h.5c.1 0 .1.1.1.1l-.1.2s0 .1-.1.1h-.5s-.1 0-.1.1v1.1c0 .5-.1 1.2.5 1.4.1 0 .1.1.1.2l-.1.1c-.5 0-1.2.2-1.2-.7v-2.1c0-.1 0-.1-.1-.1h-.3c-.1 0-.2-.1-.2-.2s0-.1.1-.2c.4-.2.7-.4.9-.9 0-.1.1-.1.1-.1.1 0 .2.1.2.1v.8zm-9.7 0v2.1c0 .4.2.7.5.9.1 0 .1.1.1.2l-.1.1h-1.3c-.1 0-.1-.1-.1-.1 0-.1 0-.1.1-.1.3-.1.5-.4.5-.8v-2.4c0-.2-.1-.4-.4-.4a.1.1 0 01-.1-.2c0-.1.1-.1.1-.1h1.1l2.7 2.8h.1c.1-.6 0-1.4 0-1.8-.1-.3-.2-.6-.5-.8a.1.1 0 010-.2h1.3c.1 0 .1 0 .1.1v.2c-.4.1-.4.5-.4 1V15c0 .1-.1.1-.1.1h-.1l-3.3-3.3h-.1zm7.9 1.7s-.1 0-.1.1c-.2.6-.5.9-1 1-1 .3-1.8-.5-1.6-1.5 0 0 0-.1.1-.1h2.8c.1 0 .1-.1.1-.2-.4-1.2-1.9-1.6-2.9-1-.6.3-.9.8-.9 1.3-.2 2.2 3 2.7 3.8.8.1-.2 0-.4-.2-.4zm-2.6-.9c0-.4.4-.7 1-.7.5 0 1 .3 1 .7h-2z"></path>
          </g>
          <path
            d="M6.4 9.5c-.1 0-.1.1-.2.1L4.8 5.9l.2-.1 1.4 3.7zm-2.1 2.7L2 11.9v-.2h.1l2.2.3v.2zm2.3 4.6l-.2-.1.3-1.9H7l-.3 1.9v.1h-.1z"
            fill="#08a455"
          ></path>
          <path
            d="M8.8 14.5v-.1c2.1-1.3 1.6-4.2-.7-4.9 0 0-.1 0 0-.1l.3-1.9h-.2l-.3 1.9s0 .1-.1 0c-.4-.1-.9 0-1.3 0-.1 0-.1.1-.2.1-1.1.4-1.8 1.2-1.9 2.4v.2c0 .5.2 1 .5 1.5v.1L3 14.8l.1.2L5 13.9h.1c.5.5 1.1.8 1.8.9H7c.5 0 1-.1 1.4-.3h.1l1.8 3.6.2-.1-1.8-3.6zm-1.5.1c-1.5 0-2.7-1.1-2.7-2.5s1.2-2.5 2.7-2.5c1.5 0 2.7 1.1 2.7 2.5s-1.2 2.5-2.7 2.5z"
            fill="#e10f12"
          ></path>
          <path
            d="M12.5 6.7h-.1l-2.8 3.5s-.1.1-.1 0V10l2.8-3.4.3.2zm-2.6 5.5c0 1.4-1.2 2.5-2.7 2.5s-2.7-1.1-2.7-2.5 1.2-2.5 2.7-2.5 2.7 1.1 2.7 2.5zm-.2 0c0-1.2-1.1-2.2-2.5-2.3-1.4 0-2.5 1-2.5 2.3 0 1.2 1.1 2.3 2.5 2.3s2.5-1 2.5-2.2z"
            fill="#08a455"
          ></path>
          <g fill="#e10f12">
            <path d="M5.1 10L3.7 8.8l-.2.2 1.4 1.2c.1.1.1.1.2 0V10z"></path>
            <circle cx="8.3" cy="7.1" r=".5"></circle>
          </g>
          <g fill="#08a455">
            <circle cx="12.6" cy="6.2" r=".5"></circle>
            <circle cx="4.8" cy="5.4" r=".5"></circle>
            <circle cx="6.5" cy="17.2" r=".5"></circle>
            <circle cx="1.5" cy="11.7" r=".5"></circle>
          </g>
          <g fill="#e10f12">
            <circle cx="3.3" cy="8.6" r=".5"></circle>
            <circle cx="2.6" cy="15.1" r=".5"></circle>
            <circle cx="10.6" cy="18.6" r=".5"></circle>
          </g>
        </svg>
        <svg
          class="payment-icon"
          viewBox="0 0 38 24"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          width="38"
          height="24"
          aria-labelledby="pi-visa"
        >
          <title id="pi-visa">Visa</title>
          <path
            opacity=".07"
            d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
          ></path>
          <path
            fill="#fff"
            d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
          ></path>
          <path
            d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
            fill="#142688"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Footer;
