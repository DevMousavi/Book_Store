import React from "react";
import Package from "./../assets/footer/package.png";
import Headphones from "./../assets/footer/headphones.png";

function FooterServicesList() {
    return (
        <div className="flex justify-between border-slate-300 border-b pb-5 bg-gray-200 px-64 py-6 cursor-default">
            <div className="flex items-center">
                <img
                    src={Headphones}
                    alt="footer-icon"
                    width="35"
                    height="35"
                    className="ml-5"
                />
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-sm">
                        پشتیبانی <span className="font-bold">24 ساعته</span>
                    </p>
                    <p className="text-xs text-slate-500">تماس با 0214400</p>
                </div>
            </div>
            <div className="flex items-center">
                <img
                    src={Package}
                    alt="footer-icon"
                    width="35"
                    height="35"
                    className="ml-2"
                />
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-sm ">
                        فرصت 7 روز <span className="font-bold">برگشت کالا</span>
                    </p>
                    <p className="text-xs text-slate-500 ">
                        ضمانت بازگشت کالا تا 7 روز
                    </p>
                </div>
            </div>
            <div className="flex items-center">
                <img
                    src={Package}
                    alt="footer-icon"
                    width="35"
                    height="35"
                    className="ml-2"
                />
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-sm ">
                        تضمین <span className="font-bold">کیفیت کالا</span>
                    </p>
                    <p className="text-xs text-slate-500 ">
                        خرید بهترین کالای موجود
                    </p>
                </div>
            </div>
            <div className="flex items-center">
                <img
                    src={Package}
                    alt="footer-icon"
                    width="35"
                    height="35"
                    className="ml-2"
                />
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-sm ">
                        پرداخت امن از{" "}
                        <span className="font-bold">درگاه بانکی</span>
                    </p>
                    <p className="text-xs text-slate-500 ">امنیت خرید آنلاین</p>
                </div>
            </div>
        </div>
    );
}

export default FooterServicesList;
