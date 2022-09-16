import React from 'react'

const Footer = () => {
  return (
      <div className='bg-gray-800  w-full '>
          <div className='flex flex-col  justify-center items-center  p-6 text-white  '>

                <div className='text-lg py-2'>
                    <p >주식회사 원큐그룹</p>
                </div>
                <div className='text-sm py-4'>
                    <p>회사소개 | 개인정보처리방침 | 서비스이용약관</p>
                </div>
                <div className='text-sm pt-1'>
                  <p>주소 서울특별시 서초구 신반포로 326 </p>
                </div>
                <div className='text-sm py-1'>
                    <p> 사업자번호 : 484-87-02153</p>
                </div>
                <div className='text-sm py-2'>
                    <p>고객센터 : 02-567-6610 | FAX : 02-612-6612</p>
                </div>
                <div className='text-sm text-gray-400 pt-6 '>
                    <p className='tracking-widest sm:text-center'>Copyright <span>ⓒ</span> 2020 - 2022 주식회사 원큐 ,  All rights reserved.</p>
                </div>

          </div>
      
      </div>
  )
}

export default Footer