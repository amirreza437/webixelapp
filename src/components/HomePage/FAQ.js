import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

export default function FAQ() {
  return (
    <div className="container mx-auto max-w-[1288px] my-10 p-10">
        <span className="flex justify-center -mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32" fill="none" viewBox="0 0 400 400">
                <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".9" stroke-width="16" d="M138.451 271.209c-29.373-3.467-46.766-60.26-32.5-83.591 4.782-7.821 14.709-11.942 23.419-11.942 2.996 0 2.635-.354 5.257.956.514.257 1.089 1.415 1.434.955 1.415-1.886 5.06-26.184 11.471-36.302 14.098-22.248 41.87-28.946 65.955-18.629 3.641 1.559 10.042 8.957 12.427 9.553.31.077 16.858-6.429 24.853-5.254 20.614 3.029 45.5 23.3 53.051 42.512 5.281 13.433-1.065 31.158-10.992 41.079-1.407 1.406-13.329 8.491-13.383 8.598-.969 1.937 1.785 4.048 1.912 6.21.483 8.193-2.007 16.199-6.691 22.927-9.183 13.193-27.852 21.08-43.015 12.42-2.904-1.659-8.107-7.147-10.514-9.554-.149-.148-4.896-4.645-5.258-5.732-.04-.12 3.724 4.623 1.912 10.509-2.706 8.791-12.249 15.809-20.074 19.584-11.947 5.765-31.749 11.382-44.448 5.255-3.074-1.484-19.597-17.674-12.427-17.674M177.259 291.522c-1.097 3.477-3.046 35.814-5.064 36.485-4.076 1.356-14.647 1.707-24.884 1.707"/>
                <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".9" stroke-width="16" d="M229.35 269.533c-2.844 17.531-4.338 61.118-3.134 62.015 2.16 1.609 20.231 0 23.957 0M298.781 157.272c6.94-9.421 18.635-13.991 26.619-21.989M334.657 142.226c-5.006-5.197-11.494-10.378-13.887-17.359M247.858 126.024c.145-2.705.27-5.411.434-8.115.257-4.24 1.605-46.323 2.17-47.256.585-.964.868 2.183.868 3.341"/>
                <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".9" stroke-width="16" d="M259.431 70.36c-6.315.048-13.022.96-18.517-3.36M168.002 116.765c-5.035-11.665-13.364-21.143-19.822-31.886-.367-.61-7.153-10.976-3.304-9.663M147.17 71.717c-4.345-1.195-16.851 10.218-13.242 7.63M103.192 183.89c-3.516-7.218-22.04-14.063-24.304-20.832M81.203 156.114c-3.703 4.658-7.311 8.788-10.416 13.888M297.623 215.138c8.972 7.599 16.839 16.552 26.619 23.147M331.185 235.97c-3.775.705-12.732 18.745-9.856 10.643M223.657 179.261c-.335-3.782.189-6.915 1.055-10.416M194.627 179.261c-.105-4.247 1.151-8.512 1.151-12.731M103.191 238.285c-8.541 5.016-17.942 8.603-26.083 14.247-1.929 1.338-10.774 9.841-6.165 5.224l1.897-1.899"/>
                <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".9" stroke-width="16" d="M65 254.488c2.565 3.273 4.348 6.702 5.787 10.416"/>
            </svg>
        </span>
        <div className="flex flex-col gap-y-7 p-10 rounded-3xl">
            <h2 className="font-black text-2xl min-[700px]:text-4xl text-[#393646] text-center">سوالات متداول</h2>
            <div className="bg-[#FF0060] mx-auto w-[1000px] divide-y divide-white/65 rounded-lg">
                <Disclosure as="div" className="flex flex-col p-2" defaultOpen={false}>
                    <DisclosureButton className="group bg-[#FF0060]/10 hover:bg-[#FF0060]/20 duration-200 p-3 rounded-md flex items-center justify-between">
                        <span className="text-lg font-medium text-white group-data-[hover]:text-white/80">
                        آیا در وبیکسل آموزش رایگان هم داریم؟
                        </span>
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 text-sm/5 text-white p-3">
                        بله. در وبیکسل آموزش رایگان داریم
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="flex flex-col p-2">
                    <DisclosureButton className="group bg-[#FF0060]/10 hover:bg-[#FF0060]/20 duration-200 p-3 rounded-md flex items-center justify-between">
                        <span className="text-lg font-medium text-white group-data-[hover]:text-white/80">
                        آیا جعبه ابزار گرافیکی در وبیکسل رایگان است؟
                        </span>
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 text-sm/5 text-white p-3">بله.</DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="flex flex-col p-2">
                    <DisclosureButton className="group bg-[#FF0060]/10 hover:bg-[#FF0060]/20 duration-200 p-3 rounded-md flex items-center justify-between">
                        <span className="text-lg font-medium text-white group-data-[hover]:text-white/80">
                        گواهی پس از اتمام دوره در وبیکسل داده میشود؟
                        </span>
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 text-sm/5 text-white p-3">بله.</DisclosurePanel>
                </Disclosure>
            </div>
        </div>
    </div>
  )
}