import React from 'react'

function FooterServicesList() {
  return (
    <div className='flex justify-between border-slate-300 border-b-[1px] pb-5'>
        <div className='flex items-center'>
            <img src="./../src/assets/footer/headphones.png" alt="footer-icon" width="35" height="35" className='ml-5'/>
            <div>
                <p className='text-sm mb-8'>پشتیبانی  <span className='font-bold'>24 ساعته</span></p>
                <p className='text-xs text-slate-500 mt-8'>تماس با 0214400</p>
            </div>
        </div>
        <div className='flex items-center'>
            <img src="./../src/assets/footer/package.png" alt="footer-icon" width="35" height="35" className='ml-2' />
            <div>
                <p className='text-sm mb-8'>فرصت 7 روز <span className='font-bold'>برگشت کالا</span></p>
                <p className='text-xs text-slate-500 mt-8'>ضمانت بازگشت کالا تا 7 روز</p>
            </div>
        </div>
        <div className='flex items-center'>
            <img src="./../src/assets/footer/package.png" alt="footer-icon" width="35" height="35" className='ml-2' />
            <div>
                <p className='text-sm mb-8'>تضمین <span className='font-bold'>کیفیت کالا</span></p>
                <p className='text-xs text-slate-500 mt-8'>خرید بهترین کالای موجود</p>
            </div>
        </div>
        <div className='flex items-center'>
            <img src="./../src/assets/footer/package.png" alt="footer-icon" width="35" height="35" className='ml-2' />
            <div>
                <p className='text-sm mb-8'>پرداخت امن از <span className='font-bold'>درگاه بانکی</span></p>
                <p className='text-xs text-slate-500 mt-8'>امنیت خرید آنلاین</p>
            </div>
        </div>

    </div>
  )
}

export default FooterServicesList