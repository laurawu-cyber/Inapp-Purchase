import svgPaths from "./svg-p964zuo8d7";
import { useState } from "react";
import { useNavigate } from "react-router";
import DropMenu from "./DropMenu-71-674";
import { useLanguage } from '../app/i18n/LanguageContext';
import imgGetDeviceQR from "@/assets/figma/qr-code.png";
import imgGetDeviceProducts from "@/assets/figma/products.png";
const imgGetDeviceArrow = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none'%3E%3Cline x1='5' y1='12' x2='19' y2='12' stroke='%23757575' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpolyline points='12 5 19 12 12 19' stroke='%23757575' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";

function GetDeviceCard() {
  const { t } = useLanguage();
  return (
    <div className="absolute bg-[#f9f9f9] bottom-0 left-0 flex flex-col gap-[12px] items-start pb-[24px] pt-[8px] px-[8px]" data-name="Plan Info Container">
      <div className="bg-[#ebebeb] h-px shrink-0 w-[195px]" />
      <div
        className="border border-[#ebebeb] border-solid h-[332px] overflow-clip relative rounded-[5px] shrink-0 w-[204px]"
        style={{ background: 'radial-gradient(ellipse at 82% 100%, #c9ffca 0%, #b7f3fa 20%, #d0eaf6 39%, #eff5ff 60%, #ffffff 100%)' }}
      >
        {/* Already have a device */}
        <div className="absolute flex flex-col gap-[4px] items-start left-[10px] top-[11px] w-[181px]">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#3d3d3d] text-[12px] w-full">{t('deviceCard.haveDevice')}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] w-full">{t('deviceCard.scanDownload')}</p>
        </div>
        {/* QR code */}
        <div className="absolute left-[7px] size-[60px] top-[79px]">
          <img alt="QR code" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGetDeviceQR} />
        </div>
        {/* Divider */}
        <div className="absolute bg-[#ebebeb] h-px left-[10px] top-[149px] w-[181px]" />
        {/* Don't have a device */}
        <div className="absolute flex flex-col gap-[4px] items-start left-[11px] top-[159px] w-[180px]">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#3d3d3d] text-[12px] w-full">{t('deviceCard.noDevice')}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] w-full">{t('deviceCard.exploreDevices')}</p>
        </div>
        {/* Product images */}
        <div className="absolute h-[71px] left-[11px] top-[217px] w-[100px]">
          <img alt="Plaud devices" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGetDeviceProducts} />
        </div>
        {/* Get Plaud devices button */}
        <div className="absolute bg-white border border-[#adadad] border-solid flex gap-[8px] h-[32px] items-center justify-center left-[11px] overflow-clip px-[16px] py-[8px] rounded-[5px] top-[287px] cursor-pointer hover:bg-[#f9f9f9]">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-black text-[12px] text-center whitespace-nowrap">{t('deviceCard.getDevices')}</p>
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <div className="absolute inset-[28.8%_28.36%_28.18%_28.03%]">
              <img alt="" className="absolute block max-w-none size-full" src={imgGetDeviceArrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[14px] relative shrink-0 w-[83.474px]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83.4735 14">
        <g id="Logo">
          <path clipRule="evenodd" d={svgPaths.p1461dd00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2984dc00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.pa0f2f80} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p1fbff400} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p1ca9a700} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p31259cb0} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Spacer() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />;
}

function UserNameContainer() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="User Name Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[9px] relative size-full">
          <Logo />
          <Spacer />
        </div>
      </div>
    </div>
  );
}

function UserAvatarContainer() {
  return (
    <div className="bg-black rounded-full shrink-0 size-[24px] flex items-center justify-center" data-name="User Avatar Container">
      <div className="overflow-clip relative size-[14px]">
        <div className="absolute inset-[20.31%_15.36%_21.03%_15.21%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.886 11.7324">
            <path d="M6.94336 0.416992C8.6287 0.417154 10.1741 1.50768 10.6836 3.09863L13.3154 11.3154H11.8262L9.17285 2.44922C9.04523 2.02256 8.65256 1.72949 8.20703 1.72949H5.67871C5.23324 1.72956 4.8405 2.02261 4.71289 2.44922L2.06055 11.3154H0.570312L3.20215 3.09863C3.71169 1.50757 5.2579 0.416992 6.94336 0.416992ZM6.94336 5.64551C7.55603 5.64571 8.05264 6.14219 8.05273 6.75488C8.05273 7.36757 7.55614 7.86406 6.94336 7.86426C6.33045 7.86426 5.83301 7.3677 5.83301 6.75488C5.8331 6.14206 6.33055 5.64551 6.94336 5.64551Z" fill="white" stroke="white" strokeWidth="0.833333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function UserInfoTextContainer({ workspaceName }: { displayName: string; workspaceName: string }) {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col font-[‘Inter:Regular’,sans-serif] font-normal items-start justify-center leading-[0] not-italic relative shrink-0 w-[115px]" data-name="User Info Text Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[22px]">{t('menu.demoAccount')}</p>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#757575] text-[13px] w-[min-content]">
        <p className="leading-[18px]">{workspaceName}</p>
      </div>
    </div>
  );
}

function UserNameAndStatusContainer({ displayName, workspaceName }: { displayName: string; workspaceName: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="User Name and Status Container">
      <UserInfoTextContainer displayName={displayName} workspaceName={workspaceName} />
      <div className="overflow-clip relative rounded-[5px] shrink-0 size-[20px]" data-name="list_chevron">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-1/2 top-1/2 w-[8px]">
          <div className="absolute inset-[-8.84%_-4.42%_-17.68%_-4.42%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70711 5.06066">
              <path d={svgPaths.p4fe0e00} id="Vector 7583" stroke="var(--stroke-0, #A3A3A3)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserDetailsContainer({ isOpen, onClick, displayName, workspaceName }: { isOpen: boolean; onClick: () => void; displayName: string; workspaceName: string }) {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full hover:bg-[#ebebeb] cursor-pointer" data-name="User Details Container" onClick={onClick}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[12px] relative w-full">
          <UserAvatarContainer />
          <UserNameAndStatusContainer displayName={displayName} workspaceName={workspaceName} />
        </div>
      </div>
    </div>
  );
}

function NewRecordingContainer() {
  const { t } = useLanguage();
  return (
    <div className="relative shrink-0 w-full" data-name="New Recording Container">
      <div className="content-stretch flex flex-col items-start pb-[8px] pt-[4px] px-[8px] relative w-full">
        <div className="h-[38px] min-w-[70px] relative rounded-[5px] shrink-0 w-full" data-name="Button">
          <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] px-[16px] py-[8px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
                <div className="absolute inset-[15%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.999 14.001">
                    <path d={svgPaths.pc4f3900} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">{t('nav.addAudio')}</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[5px]" />
        </div>
      </div>
    </div>
  );
}

function UserContainer({ isDropdownOpen, onDropdownToggle, onMembershipClick, onCreateTeamClick, displayName, workspaceName }: { isDropdownOpen: boolean; onDropdownToggle: () => void; onMembershipClick: () => void; onCreateTeamClick: () => void; displayName: string; workspaceName: string }) {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[8px] px-[8px] relative shrink-0 w-[220px]" data-name="User Container">
      <UserNameContainer />
      <UserDetailsContainer isOpen={isDropdownOpen} onClick={onDropdownToggle} displayName={displayName} workspaceName={workspaceName} />
      <NewRecordingContainer />
      <div className="-translate-x-1/2 absolute bottom-0 h-0 left-1/2 w-[204px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 204 1">
            <path d="M0 0.5H204" id="Divider" stroke="var(--stroke-0, #EBEBEB)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavigationItemsContainer() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[204px]" data-name="Navigation Items Container">
      <div className="bg-[#ebebeb] content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-[204px]" data-name="Navigation Menu One">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_home">
          <div className="absolute inset-[18.37%_14.55%_18.37%_14.31%]" data-name="Vector">
            <div className="absolute inset-[-3.95%_-2.29%_-3.95%_-2.3%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.88 13.6514">
                <path d={svgPaths.p26b30180} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">{t('nav.home')}</p>
      </div>
      <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_search">
              <div className="absolute inset-[12.5%_13.23%_13.23%_12.5%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8535 14.8535">
                  <path d={svgPaths.p192dbc00} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">{t('nav.search')}</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_template_community">
              <div className="absolute inset-[15%_15.27%_15.28%_15%]" data-name="Vector">
                <div className="absolute inset-[-3.59%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9454 14.9447">
                    <path d={svgPaths.p2c703200} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">{t('nav.community')}</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_explore">
              <div className="absolute inset-[14.57%_16.57%_19.5%_17.5%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1854 13.1854">
                  <path d={svgPaths.p3f490370} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">{t('nav.explore')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavDivider() {
  return (
    <div className="h-0 relative shrink-0 w-[204px]" data-name="Divider">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 204 1">
          <path d="M0 0.5H204" stroke="var(--stroke-0, #EBEBEB)" />
        </svg>
      </div>
    </div>
  );
}

function NavChevron({ color = '#A3A3A3' }: { color?: string }) {
  return (
    <div className="overflow-clip relative rounded-[5px] shrink-0 size-[20px]" data-name="list_chevron">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-1/2 top-1/2 w-[8px]">
        <div className="absolute inset-[-8.84%_-4.42%_-17.68%_-4.42%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70711 5.06066">
            <path d={svgPaths.p4fe0e00} stroke={`var(--stroke-0, ${color})`} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavAddIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_add_xs">
      <div className="absolute inset-[23.33%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.667 10.667">
          <path d={svgPaths.pcd34700} fill="var(--fill-0, #757575)" />
        </svg>
      </div>
    </div>
  );
}

function NavFolderIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon_folder">
      <div className="absolute inset-[20.42%_17.17%_18.42%_19.17%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7334 12.2324">
          <path d={svgPaths.p36f93380} fill="var(--fill-0, black)" />
        </svg>
      </div>
    </div>
  );
}

function PrivateSection() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[204px]" data-name="Navigation Menu With Menu">
      {/* Private header row */}
      <div className="content-stretch flex items-center justify-between pl-[8px] pr-[4px] py-[8px] relative rounded-[5px] shrink-0 w-full" data-name="Component 13">
        <div className="content-stretch flex items-center gap-[4px] relative shrink-0">
          {/* Lock icon */}
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_lock">
            <svg className="absolute inset-0 block size-full" viewBox="0 0 20 20" fill="none">
              <rect x="4.5" y="9" width="11" height="8.5" rx="1.5" stroke="black" strokeWidth="1.3" />
              <path d="M7 9V6.5a3 3 0 016 0V9" stroke="black" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-black text-[14px] whitespace-nowrap">{t('nav.private')}</p>
          <NavChevron />
        </div>
        <NavAddIcon />
      </div>

      {/* All files */}
      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-[204px]" data-name="Navigation Menu One">
        <NavFolderIcon />
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
          <span className="leading-[22px]">{t('nav.allFiles')}{` `}</span>
          <span className="leading-[22px] text-[#a3a3a3]">(299)</span>
        </p>
      </div>

      {/* Unfiled */}
      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-[204px]" data-name="Navigation Menu One">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_unorganized">
          <div className="absolute inset-[17.5%_19.81%_17.5%_17.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5381 13">
              <path d={svgPaths.p26ae8900} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
          <span className="leading-[22px]">{t('nav.unfiled')}{` `}</span>
          <span className="leading-[22px] text-[#a3a3a3]">(34)</span>
        </p>
      </div>

      {/* Trash */}
      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-[204px]" data-name="Navigation Menu One">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_delete">
          <div className="absolute flex inset-[15.38%_16.99%_13.32%_16.96%] items-center justify-center">
            <div className="flex-none h-[14.261px] rotate-180 w-[13.209px]">
              <div className="relative size-full" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.209 14.2607">
                  <path d={svgPaths.p39870cc0} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
          <span className="leading-[22px]">{t('nav.trash')}{` `}</span>
          <span className="leading-[22px] text-[#a3a3a3]">(3)</span>
        </p>
      </div>

      {/* Meetings */}
      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
        <div className="relative shrink-0 size-[20px]" data-name="icon_meetings_folder">
          <svg className="absolute inset-0 block size-full" viewBox="0 0 20 20" fill="none">
            <path d="M2.5 8.5a1 1 0 011-1h13a1 1 0 011 1v7.5a1 1 0 01-1 1h-13a1 1 0 01-1-1V8.5z" stroke="black" strokeWidth="1.2" />
            <path d="M7 7.5V6a3 3 0 016 0v1.5" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
          <span className="leading-[22px]">{t('nav.meetings')}{` `}</span>
          <span className="leading-[22px] text-[#a3a3a3]">(21)</span>
        </p>
      </div>

      {/* Tranning */}
      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
        <div className="relative shrink-0 size-[20px]" data-name="icon_flower_folder">
          <svg className="absolute inset-0 block size-full" viewBox="0 0 20 20" fill="none">
            <path d="M2.5 8a1 1 0 011-1h13a1 1 0 011 1v8a1 1 0 01-1 1h-13a1 1 0 01-1-1V8z" stroke="black" strokeWidth="1.2" />
            <circle cx="10" cy="11.5" r="1.5" fill="black" />
            <path d="M10 8.5c.5-1 1.5-1.5 2-1s.5 1.5 0 2" stroke="black" strokeWidth="1" strokeLinecap="round" />
            <path d="M10 8.5c-.5-1-1.5-1.5-2-1s-.5 1.5 0 2" stroke="black" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
          <span className="leading-[22px]">{t('nav.tranning')}{` `}</span>
          <span className="leading-[22px] text-[#a3a3a3]">(56)</span>
        </p>
      </div>

      {/* Comes from sub-section */}
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[204px]" data-name="Navigation Menu With Menu">
        <div className="content-stretch flex items-center justify-between pl-[8px] pr-[4px] py-[8px] relative rounded-[5px] shrink-0 w-full" data-name="Component 12">
          <div className="content-stretch flex items-center gap-[4px] relative shrink-0">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">{t('nav.comesFrom')}</p>
            <NavChevron color="#757575" />
          </div>
          <NavAddIcon />
        </div>
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
            <span className="leading-[22px]">{t('nav.note')}{` `}</span>
            <span className="leading-[22px] text-[#a3a3a3]">(100)</span>
          </p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
            <span className="leading-[22px]">{t('nav.call')}</span>
            <span className="leading-[22px] text-[#a3a3a3]">{` (2)`}</span>
          </p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
            <span className="leading-[22px]">{t('nav.import')}</span>
            <span className="leading-[22px] text-[#a3a3a3]">{` (6)`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function TeamSpaceSection() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[204px]" data-name="Folder Container">
      {/* Team space header row */}
      <div className="content-stretch flex items-center justify-between pl-[8px] pr-[4px] py-[8px] relative rounded-[5px] shrink-0 w-full" data-name="Component 12">
        <div className="content-stretch flex items-center gap-[4px] relative shrink-0">
          {/* Building / team icon */}
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_team_space">
            <svg className="absolute inset-0 block size-full" viewBox="0 0 20 20" fill="none">
              <path d="M3 18V9l7-5 7 5v9" stroke="black" strokeWidth="1.2" strokeLinejoin="round" />
              <rect x="7.5" y="13" width="5" height="5" stroke="black" strokeWidth="1.2" />
              <rect x="5" y="10" width="2.5" height="2.5" rx="0.3" fill="black" />
              <rect x="12.5" y="10" width="2.5" height="2.5" rx="0.3" fill="black" />
            </svg>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-black text-[14px] whitespace-nowrap">{t('nav.teamSpace')}</p>
          <NavChevron />
        </div>
        <NavAddIcon />
      </div>

      {/* Work meetings */}
      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
        <NavFolderIcon />
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
          <span className="leading-[22px]">{t('nav.workMeetings')}{` `}</span>
          <span className="leading-[22px] text-[#a3a3a3]">(7)</span>
        </p>
      </div>

      {/* Project Plan */}
      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
        <NavFolderIcon />
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
          <span className="leading-[22px]">{t('nav.projectPlan')}{` `}</span>
          <span className="leading-[22px] text-[#a3a3a3]">(21)</span>
        </p>
      </div>

      {/* China Sales */}
      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
        <NavFolderIcon />
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
          <span className="leading-[22px]">{t('nav.chinaSales')}{` `}</span>
          <span className="leading-[22px] text-[#a3a3a3]">(56)</span>
        </p>
      </div>

      {/* Traning */}
      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
        <NavFolderIcon />
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
          <span className="leading-[22px]">{t('nav.traning')}{` `}</span>
          <span className="leading-[22px] text-[#a3a3a3]">(56)</span>
        </p>
      </div>
    </div>
  );
}

function NavigationContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pl-[8px] pt-[16px] relative shrink-0 w-[220px]" data-name="Navigation Container">
      <NavigationItemsContainer />
      <NavDivider />
      <PrivateSection />
      <NavDivider />
      <TeamSpaceSection />
    </div>
  );
}

function UserInfo({ isDropdownOpen, onDropdownToggle, onMembershipClick, onCreateTeamClick, onPersonalWorkspaceClick, onSettingsClick, onInviteMemberClick, displayName, workspaceName, otherTeamWorkspaces, onOtherTeamClick }: { isDropdownOpen: boolean; onDropdownToggle: () => void; onMembershipClick: () => void; onCreateTeamClick: () => void; onPersonalWorkspaceClick: () => void; onSettingsClick: () => void; onInviteMemberClick?: () => void; displayName: string; workspaceName: string; otherTeamWorkspaces?: string[]; onOtherTeamClick?: (name: string) => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full overflow-visible" data-name="User Info">
      <UserContainer isDropdownOpen={isDropdownOpen} onDropdownToggle={onDropdownToggle} onMembershipClick={onMembershipClick} onCreateTeamClick={onCreateTeamClick} displayName={displayName} workspaceName={workspaceName} />
      {isDropdownOpen && (
        <div className="absolute left-[8px] top-[100px] z-50">
          <DropMenu onSettingsClick={onSettingsClick} onInviteMemberClick={onInviteMemberClick} onPersonalWorkspaceClick={onPersonalWorkspaceClick} onCreateTeamClick={onCreateTeamClick} workspaceName={workspaceName} otherTeamWorkspaces={otherTeamWorkspaces} onOtherTeamClick={onOtherTeamClick} />
        </div>
      )}
      <NavigationContainer />
    </div>
  );
}

export default function Sidebar({ onSettingsClick, onInviteMemberClick, onCreateTeamClick: externalCreateTeamClick, displayName, workspaceName }: { onSettingsClick?: () => void; onInviteMemberClick?: () => void; onCreateTeamClick?: () => void; displayName?: string; workspaceName?: string }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Read all team workspaces and filter out the current one
  // Handles both legacy string[] and new {name, createdAt}[] formats
  const rawWorkspaces: (string | {name: string})[] = JSON.parse(localStorage.getItem('teamWorkspaces') || '[]');
  const allTeamWorkspaces: string[] = rawWorkspaces.map(w => typeof w === 'string' ? w : w.name);
  const currentName = workspaceName || 'Team workspace';
  const otherTeamWorkspaces = allTeamWorkspaces.filter(n => n !== currentName);

  const { t } = useLanguage();

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMembershipClick = () => {
    setIsDropdownOpen(false);
    navigate('/membership');
  };

  const handlePersonalWorkspaceClick = () => {
    setIsDropdownOpen(false);
    sessionStorage.setItem('switchedWorkspace', t('menu.personalWorkspace'));
    navigate('/personal');
  };

  const handleCreateTeamClick = () => {
    setIsDropdownOpen(false);
    if (externalCreateTeamClick) {
      externalCreateTeamClick();
    } else {
      navigate('/plan-selection');
    }
  };

  const handleSettingsClick = () => {
    setIsDropdownOpen(false);
    if (onSettingsClick) {
      onSettingsClick();
    }
  };

  const handleOtherTeamClick = (name: string) => {
    setIsDropdownOpen(false);
    sessionStorage.setItem('switchedWorkspace', name);
    navigate(`/home-team?workspaceName=${encodeURIComponent(name)}`);
  };

  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-start relative size-full overflow-visible" data-name="Sidebar">
      <UserInfo
        isDropdownOpen={isDropdownOpen}
        onDropdownToggle={handleDropdownToggle}
        onMembershipClick={handleMembershipClick}
        onCreateTeamClick={handleCreateTeamClick}
        onPersonalWorkspaceClick={handlePersonalWorkspaceClick}
        onSettingsClick={handleSettingsClick}
        onInviteMemberClick={onInviteMemberClick}
        displayName={displayName || 'Demo Account'}
        workspaceName={currentName}
        otherTeamWorkspaces={otherTeamWorkspaces.length > 0 ? otherTeamWorkspaces : undefined}
        onOtherTeamClick={handleOtherTeamClick}
      />
    </div>
  );
}