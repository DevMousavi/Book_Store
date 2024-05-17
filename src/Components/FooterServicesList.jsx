import React from "react";
import Package from "./../assets/footer/package.png";
import Headphones from "./../assets/footer/headphones.png";

function FooterServicesList() {
    return (
        <div className="af:hidden as:flex md:justify-between af:justify-around af:flex-wrap border-slate-300 border-b pb-5 bg-gray-200 md:px-64 py-6 cursor-default">
            <div className="flex items-center af:my-5 md:my-0 af:shadow-md md:shadow-none af:p-3 md:p-0">
                <img
                    src={Headphones}
                    alt="footer-icon"
                    className="ml-5 md:w-9 md:h-9 af:w-5"
                />
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-sm">
                        پشتیبانی <span className="font-bold">24 ساعته</span>
                    </p>
                    <p className="md:flex text-xs text-slate-500 af:hidden">
                        تماس با 0214400
                    </p>
                </div>
            </div>
            <div className="flex items-center af:my-5 md:my-0 af:shadow-md md:shadow-none af:p-3 md:p-0">
                <img
                    src={Package}
                    alt="footer-icon"
                    className="ml-2 md:w-9 md:h-9 af:w-5"
                />
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-sm ">
                        فرصت 7 روز <span className="font-bold">برگشت کالا</span>
                    </p>
                    <p className="text-xs text-slate-500 af:hidden md:flex">
                        ضمانت بازگشت کالا تا 7 روز
                    </p>
                </div>
            </div>
            <div className="flex items-center af:my-5 md:my-0 af:shadow-md md:shadow-none af:p-3 md:p-0">
                <img
                    src={Package}
                    alt="footer-icon"
                    className="ml-2 md:w-9 md:h-9 af:w-5"
                />
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-sm ">
                        تضمین <span className="font-bold">کیفیت کالا</span>
                    </p>
                    <p className="text-xs text-slate-500 af:hidden md:flex">
                        خرید بهترین کالای موجود
                    </p>
                </div>
            </div>
            <div className="flex items-center af:my-5 md:my-0 af:shadow-md md:shadow-none af:p-3 md:p-0">
                <img
                    src={Package}
                    alt="footer-icon"
                    className="ml-2 md:w-9 md:h-9 af:w-5"
                />
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-sm ">
                        پرداخت امن از{" "}
                        <span className="font-bold">درگاه بانکی</span>
                    </p>
                    <p className="md:text-xs md:text-slate-500 af:hidden md:flex">
                        امنیت خرید آنلاین
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FooterServicesList;
