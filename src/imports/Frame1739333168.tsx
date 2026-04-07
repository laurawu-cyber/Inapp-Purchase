import svgPaths from "./svg-w72f7ysekr";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
// @ts-ignore
import imgConfettiPopper from "./img-confetti-popper.gif";
import { useSearchParams, useNavigate } from "react-router";
import { useLanguage } from '../app/i18n/LanguageContext';

const imgIconLogout = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' stroke='%23757575' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpolyline points='16 17 21 12 16 7' stroke='%23757575' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cline x1='21' y1='12' x2='9' y2='12' stroke='%23757575' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";
const imgIconRename = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' stroke='%23757575' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' stroke='%23757575' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";
const imgIconEyeClose = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24' stroke='%23757575' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cline x1='1' y1='1' x2='23' y2='23' stroke='%23757575' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";
const imgSectionDivider = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='1'%3E%3Crect width='100%25' height='1' fill='%23ebebeb'/%3E%3C/svg%3E";
const imgXIconModal = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none'%3E%3Cline x1='18' y1='6' x2='6' y2='18' stroke='%23757575' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cline x1='6' y1='6' x2='18' y2='18' stroke='%23757575' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";
const imgCheckCircle = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='30' r='28' fill='%23e8f5e9' stroke='%2343a047' stroke-width='2'/%3E%3Cpath d='M18 30l9 9 15-18' stroke='%2343a047' stroke-width='3' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";

function Frame2() {
  const { t } = useLanguage();
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pb-[8px] pt-[16px] px-[16px] relative w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[30px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">{t('settings.title')}</p>
        </div>
      </div>
    </div>
  );
}

function Frame68() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">{t('settings.account')}</p>
    </div>
  );
}

function Component() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Component 12">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end pl-[8px] pr-[4px] py-[8px] relative w-full">
          <Frame68 />
        </div>
      </div>
    </div>
  );
}

function Frame9({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  const { t } = useLanguage();
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <Component />
        <div
          className={`${activeTab === 'account' ? 'bg-[#ebebeb]' : ''} cursor-pointer relative rounded-[5px] shrink-0 w-full hover:bg-[#f0f0f0]`}
          data-name="Navigation Menu One"
          onClick={() => setActiveTab('account')}
        >
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="relative shrink-0 size-[20px]" data-name="icon_iconfont_folder_user">
                <div className="absolute bottom-[16.67%] left-1/4 right-1/4 top-[16.67%]" data-name="Vector">
                  <div className="absolute inset-[-3.75%_-5%_0_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 13.8333">
                      <path d={svgPaths.p21dfc800} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">{t('settings.accountSecurity')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame9 activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

function Frame69() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] w-[129px]">{t('settings.workspace')}</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Component 12">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end pl-[8px] pr-[4px] py-[8px] relative w-full">
          <Frame69 />
        </div>
      </div>
    </div>
  );
}

function Frame10({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  const { t } = useLanguage();
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <Component1 />
        <div
          className={`${activeTab === 'personalization' ? 'bg-[#ebebeb]' : ''} cursor-pointer relative rounded-[5px] shrink-0 w-full hover:bg-[#f0f0f0]`}
          data-name="Navigation Menu One"
          onClick={() => setActiveTab('personalization')}
        >
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_profile">
                <div className="absolute inset-[20.75%_16.25%_20.09%_15.39%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6709 11.833">
                    <path d={svgPaths.p30879900} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">{t('settings.personalization')}</p>
            </div>
          </div>
        </div>
        <div
          className={`${activeTab === 'preferences' ? 'bg-[#ebebeb]' : ''} cursor-pointer relative rounded-[5px] shrink-0 w-full hover:bg-[#f0f0f0]`}
          data-name="Navigation Menu One"
          onClick={() => setActiveTab('preferences')}
        >
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="relative shrink-0 size-[20px]" data-name="icon_preference">
                <div className="absolute inset-[14.58%_18.75%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.499 14.167">
                    <path d={svgPaths.pe3e2e00} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">{t('settings.preferences')}</p>
            </div>
          </div>
        </div>
        <div
          className={`${activeTab === 'custom_vocabulary' ? 'bg-[#ebebeb]' : ''} cursor-pointer relative rounded-[5px] shrink-0 w-full hover:bg-[#f0f0f0]`}
          data-name="Navigation Menu One"
          onClick={() => setActiveTab('custom_vocabulary')}
        >
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_member_glossary">
                <div className="absolute inset-[15.83%_22.83%_15.84%_22.84%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8662 13.666">
                    <path d={svgPaths.p178b2f00} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">{t('settings.customVocabulary')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame10 activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

function Frame70() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">{t('settings.workspaceManagement')}</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Component 13">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end px-[16px] py-[8px] relative w-full">
          <Frame70 />
        </div>
      </div>
    </div>
  );
}

function Frame13({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  const { t } = useLanguage();
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <div
          className={`${activeTab === 'general' ? 'bg-[#ebebeb]' : ''} cursor-pointer relative rounded-[5px] shrink-0 w-full hover:bg-[#f0f0f0]`}
          data-name="Navigation Menu One"
          onClick={() => setActiveTab('general')}
        >
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_tem_com_real_estate">
                <div className="absolute inset-[23.84%_20%_20%_20%]" data-name="Vector">
                  <div className="absolute inset-[-4.45%_-4.17%_0_-4.17%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 11.732">
                      <path d={svgPaths.pd0de300} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">{t('settings.general')}</p>
            </div>
          </div>
        </div>
        <div
          className={`${activeTab === 'members' ? 'bg-[#ebebeb]' : ''} cursor-pointer relative rounded-[5px] shrink-0 w-full hover:bg-[#f0f0f0]`}
          data-name="Navigation Menu One"
          onClick={() => setActiveTab('members')}
        >
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_user_2">
                <div className="absolute inset-[15.83%_14.17%_20%_14.17%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3337 12.0003">
                    <path d={svgPaths.p21dfc800} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">{t('settings.membersRoles')}</p>
            </div>
          </div>
        </div>
        <div
          className={`${activeTab === 'billing' ? 'bg-[#ebebeb]' : ''} cursor-pointer relative rounded-[5px] shrink-0 w-full hover:bg-[#f0f0f0]`}
          data-name="Navigation Menu One"
          onClick={() => setActiveTab('billing')}
        >
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_billings">
                <div className="absolute inset-[12.5%_20%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15.0003">
                    <path d={svgPaths.p26eed900} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[35.53%_46.8%_64.47%_31.27%]">
                  <div className="absolute inset-[-0.5px_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.38672 1">
                      <path d="M0 0.5H4.38672" id="Vector 7556" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[48.07%_46.8%_51.93%_31.27%]">
                  <div className="absolute inset-[-0.5px_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.38672 1">
                      <path d="M0 0.5H4.38672" id="Vector 7556" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">{t('settings.billingPlan')}</p>
            </div>
          </div>
        </div>
        <div
          className={`${activeTab === 'devices' ? 'bg-[#ebebeb]' : ''} cursor-pointer relative rounded-[5px] shrink-0 w-full hover:bg-[#f0f0f0]`}
          data-name="Navigation Menu One"
          onClick={() => setActiveTab('devices')}
        >
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_plaud_note">
                <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.667 15">
                    <path d={svgPaths.p285eca00} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">{t('settings.devices')}</p>
            </div>
          </div>
        </div>
        <div
          className={`${activeTab === 'security' ? 'bg-[#ebebeb]' : ''} cursor-pointer relative rounded-[5px] shrink-0 w-full hover:bg-[#f0f0f0]`}
          data-name="Navigation Menu One"
          onClick={() => setActiveTab('security')}
        >
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_privacy_&_security">
                <div className="absolute inset-[15%_20%]" data-name="Vector">
                  <div className="absolute inset-[-3.57%_-4.17%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 15">
                      <path d={svgPaths.p34cdbf00} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">{t('settings.security')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Component2 />
      <Frame13 activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

function Frame71() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">{t('settings.support')}</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Component 13">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end px-[16px] py-[8px] relative w-full">
          <Frame71 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  const { t } = useLanguage();
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <Component3 />
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_help_&_feedback">
                <div className="absolute inset-[17.46%_18.41%_17.49%_15.89%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1396 13.0117">
                    <path d={svgPaths.p4d8080} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">{t('settings.helpCenter')}</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_plaud">
                <div className="absolute inset-[20.31%_15.36%_21.03%_15.21%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.886 11.7324">
                    <path d={svgPaths.p45fd370} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.833333" />
                  </svg>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">{t('settings.aboutPlaud')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserInfo({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[23px] h-[767px] items-center relative shrink-0 w-full" data-name="User Info">
      <Frame11 activeTab={activeTab} setActiveTab={setActiveTab} />
      <Frame14 activeTab={activeTab} setActiveTab={setActiveTab} />
      <Frame12 activeTab={activeTab} setActiveTab={setActiveTab} />
      <Frame15 />
    </div>
  );
}

function Frame1({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex flex-col gap-[8px] h-[1005px] items-start left-0 top-0 w-[220px]">
      <Frame2 />
      <UserInfo activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

function Frame77({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  return (
    <div className="bg-white h-[829px] relative rounded-[5px] shrink-0 w-[1196px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame1 activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function SettingsSidebar({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex flex-col h-[1428px] items-start left-[-1px] overflow-clip top-[-1px] w-[220px]">
      <Frame77 activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

function Container1() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">{t('account.emailSection')}</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[70px] overflow-clip p-[8px] relative rounded-[5px] shrink-0" data-name="Button">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[12px] text-center">demo@plaud.ai</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Row">
      <Container1 />
      <Button />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Row />
    </div>
  );
}

function Frame3() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">{t('settings.account')}</p>
      <div className="bg-[#ebebeb] h-px shrink-0 w-full" />
      <Container />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[872px]">
      <Frame3 />
    </div>
  );
}

function SectionHeader() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Header">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">{t('account.languageSection')}</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 872 1">
            <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="872" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start not-italic relative self-stretch shrink-0" data-name="Container">
      <p className="leading-[22px] min-w-full relative shrink-0 text-[14px] text-black w-[min-content]">{t('account.displayLanguage')}</p>
      <p className="leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">{t('account.languageDesc')}</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2f2cea80} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const options: { value: 'en' | 'ja'; label: string }[] = [
    { value: 'en', label: 'English' },
    { value: 'ja', label: '日本語' },
  ];
  return (
    <div className="relative shrink-0" data-name="Button">
      <div
        className="content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[70px] overflow-clip p-[8px] relative rounded-[5px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] border border-[#ebebeb] border-solid"
        onClick={() => setOpen(o => !o)}
      >
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black text-center whitespace-nowrap">
          {lang === 'ja' ? '日本語' : 'English'}
        </p>
        <Icon />
      </div>
      {open && (
        <div className="absolute right-0 top-[36px] z-50 bg-white border border-[#ebebeb] border-solid rounded-[5px] shadow-[0px_4px_16px_rgba(0,0,0,0.08)] overflow-hidden min-w-[100px]">
          {options.map(opt => (
            <div
              key={opt.value}
              className={`px-[12px] py-[8px] text-[14px] font-['Inter:Regular',sans-serif] cursor-pointer hover:bg-[#f5f5f5] whitespace-nowrap ${lang === opt.value ? 'text-black font-medium' : 'text-[#3d3d3d]'}`}
              onClick={() => { setLang(opt.value); setOpen(false); }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Row">
      <Container5 />
      <Button1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Row1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <SectionHeader />
      <Container4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
    </div>
  );
}

function Frame17() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">{t('account.loginSection')}</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 872 1">
            <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="872" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal items-start min-h-px min-w-px not-italic relative">
      <p className="leading-[22px] min-w-full relative shrink-0 text-[14px] text-black w-[min-content]">Email</p>
      <p className="leading-[18px] relative shrink-0 text-[#3d3d3d] text-[12px] whitespace-nowrap">demo@plaud.ai</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[166px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Email">
        <div className="absolute flex inset-[22.92%_16.67%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[13px] w-[16px]">
            <div className="relative size-full">
              <div className="absolute inset-[-4.62%_-3.75%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 11.8333">
                  <path d={svgPaths.p4db8c00} id="Rectangle 46229948" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame18 />
    </div>
  );
}

function Frame16() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full">
      <Frame4 />
      <div className="bg-white h-[32px] min-w-[70px] relative rounded-[5px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center min-w-[inherit] overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[12px] text-center">{t('account.changePassword')}</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#adadad] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function Google() {
  return (
    <div className="absolute inset-[8.33%_10.23%_8.33%_8.33%]" data-name="Google">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2879 16.6667">
        <g id="Google">
          <path d={svgPaths.p3c97a080} fill="var(--fill-0, #FBBC05)" id="Intersect" />
          <path d={svgPaths.p1ce0f3c0} fill="var(--fill-0, #EA4335)" id="Intersect_2" />
          <path d={svgPaths.p354ea30} fill="var(--fill-0, #34A853)" id="Subtract" />
          <path d={svgPaths.p2b02db00} fill="var(--fill-0, #4285F4)" id="Intersect_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SSO-icon">
        <Google />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black w-full">Google</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[166px]">
      <Frame6 />
      <Frame21 />
    </div>
  );
}

function Frame20() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full">
      <Frame5 />
      <div className="bg-white h-[32px] min-w-[100px] relative rounded-[5px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center min-w-[inherit] overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[12px] text-center">{t('btn.add')}</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#adadad] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Apple</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[166px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SSO-icon">
        <div className="absolute inset-[8.33%_16.67%_8.33%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1667 16.6667">
            <path d={svgPaths.p2f5c3d00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <Frame23 />
    </div>
  );
}

function Frame22() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full">
      <Frame7 />
      <div className="bg-white h-[32px] min-w-[100px] relative rounded-[5px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center min-w-[inherit] overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[12px] text-center">{t('btn.add')}</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#adadad] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame20 />
      <Frame22 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame17 />
      <Frame19 />
    </div>
  );
}

function Frame24() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">{t('account.sessionsSection')}</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 872 1">
            <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="872" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">{t('account.colBased')}</p>
      </div>
    </div>
  );
}

function Frame27() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">{t('account.colLoginWith')}</p>
      </div>
    </div>
  );
}

function Frame79() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">{t('account.colLastActive')}</p>
      </div>
    </div>
  );
}

function Frame80() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex h-[36px] items-center justify-end overflow-clip py-[4px] relative shrink-0 w-[218px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">{t('btn.manage')}</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0 w-[860px]">
      <Frame26 />
      <Frame27 />
      <Frame79 />
      <Frame80 />
    </div>
  );
}

function PlaudWeb() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plaud_web">
      <div className="absolute inset-[19.98%_20%_19.99%_20%]" data-name="Vector">
        <div className="absolute inset-[-4.16%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0008 13.0063">
            <path d={svgPaths.p2b785d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Badge() {
  const { t } = useLanguage();
  return (
    <div className="bg-[#d0eaf6] content-stretch flex gap-[2px] h-[20px] items-center justify-center px-[8px] py-[2px] relative rounded-[5px] shrink-0" data-name="Badge">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">{t('account.current')}</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <PlaudWeb />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[22px]">Plaud Web1</p>
      </div>
      <Badge />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] w-[248px]">
        <p className="leading-[22px]">Chrome</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] w-[288px]">
        <p className="leading-[22px]">2025-08-29 12:11:35</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[218px]">
      <div className="absolute flex items-center justify-center left-[158px] size-[20px] top-[8px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[20px]" data-name="icon_logout">
            <div className="absolute inset-[17.5%_17.5%_17.5%_15%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4996 13">
                <path d={svgPaths.p25919d00} fill="var(--fill-0, #7A7A7A)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0 w-[860px]">
      <Frame33 />
      <Frame34 />
      <Frame37 />
      <Frame38 />
    </div>
  );
}

function PlaudWeb1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plaud_web">
      <div className="absolute inset-[19.98%_20%_19.99%_20%]" data-name="Vector">
        <div className="absolute inset-[-4.16%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0008 13.0063">
            <path d={svgPaths.p2b785d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <PlaudWeb1 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[22px]">Plaud Web2</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">Chrome</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">2025-08-29 12:10:35</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[218px]">
      <div className="absolute flex items-center justify-center left-[158px] size-[20px] top-[8px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[20px]" data-name="icon_logout">
            <div className="absolute inset-[17.5%_17.5%_17.5%_15%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4996 13">
                <path d={svgPaths.p25919d00} fill="var(--fill-0, #7A7A7A)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0 w-[860px]">
      <Frame40 />
      <Frame41 />
      <Frame42 />
      <Frame43 />
    </div>
  );
}

function PlaudWeb2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plaud_web">
      <div className="absolute inset-[19.98%_20%_19.99%_20%]" data-name="Vector">
        <div className="absolute inset-[-4.16%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0008 13.0063">
            <path d={svgPaths.p2b785d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <PlaudWeb2 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[22px]">Plaud Web2</p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">Chrome</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">2025-08-29 12:10:35</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[218px]">
      <div className="absolute flex items-center justify-center left-[158px] size-[20px] top-[8px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[20px]" data-name="icon_logout">
            <div className="absolute inset-[17.5%_17.5%_17.5%_15%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4996 13">
                <path d={svgPaths.p25919d00} fill="var(--fill-0, #7A7A7A)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0 w-[860px]">
      <Frame45 />
      <Frame46 />
      <Frame47 />
      <Frame48 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_phone">
        <div className="absolute inset-[15.16%_8.75%_-5%_28.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.167 14.7236">
            <path d={svgPaths.pe753880} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-black">
        <p className="leading-[22px]">Plaud App1</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] w-[248px]">
        <p className="leading-[22px]">iPhone 13</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">2024-03-11 12:11:35</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[218px]">
      <div className="absolute flex items-center justify-center left-[158px] size-[20px] top-[8px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[20px]" data-name="icon_logout">
            <div className="absolute inset-[17.5%_17.5%_17.5%_15%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4996 13">
                <path d={svgPaths.p25919d00} fill="var(--fill-0, #7A7A7A)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0 w-[860px]">
      <Frame50 />
      <Frame51 />
      <Frame52 />
      <Frame53 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_phone">
        <div className="absolute inset-[15.16%_8.75%_-5%_28.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.167 14.7236">
            <path d={svgPaths.pe753880} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-black">
        <p className="leading-[22px]">Plaud App1</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] w-[248px]">
        <p className="leading-[22px]">iPhone 13</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">2024-03-11 12:11:35</p>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[218px]">
      <div className="absolute flex items-center justify-center left-[158px] size-[20px] top-[8px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[20px]" data-name="icon_logout">
            <div className="absolute inset-[17.5%_17.5%_17.5%_15%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4996 13">
                <path d={svgPaths.p25919d00} fill="var(--fill-0, #7A7A7A)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0 w-[860px]">
      <Frame55 />
      <Frame56 />
      <Frame57 />
      <Frame58 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_phone">
        <div className="absolute inset-[15.16%_8.75%_-5%_28.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.167 14.7236">
            <path d={svgPaths.pe753880} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-black">
        <p className="leading-[22px]">Plaud App1</p>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] w-[248px]">
        <p className="leading-[22px]">iPhone 13</p>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">2024-03-11 12:11:35</p>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[214px]">
      <div className="absolute flex items-center justify-center left-[158px] size-[20px] top-[8px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[20px]" data-name="icon_logout">
            <div className="absolute inset-[17.5%_17.5%_17.5%_15%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4996 13">
                <path d={svgPaths.p25919d00} fill="var(--fill-0, #7A7A7A)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0 w-[860px]">
      <Frame60 />
      <Frame61 />
      <Frame62 />
      <Frame63 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[860px]">
      <Frame30 />
      <Frame39 />
      <Frame44 />
      <Frame49 />
      <Frame54 />
      <Frame59 />
    </div>
  );
}

function Frame73() {
  return <div className="absolute bg-[#c2c2c2] h-[228px] right-[4px] rounded-[5px] top-[4px] w-[4px]" />;
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pr-[16px] relative shrink-0 w-[872px]">
      <Frame25 />
      <Frame28 />
      <Frame73 />
    </div>
  );
}

function Frame75() {
  return <div className="absolute bg-[#c2c2c2] h-[228px] right-[4px] rounded-[5px] top-[60px] w-[4px]" />;
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[316px] items-start overflow-clip pb-[16px] relative shrink-0 w-[872px]">
      <Frame24 />
      <Frame74 />
      <Frame75 />
    </div>
  );
}

function Frame65() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">{t('account.twoStepSection')}</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 872 1">
            <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="872" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextContainer() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start not-italic relative shrink-0 whitespace-nowrap" data-name="Text Container">
      <p className="leading-[22px] relative shrink-0 text-[14px] text-black">{t('account.emailVerCode')}</p>
      <p className="leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px]">{t('account.emailVerDesc')}</p>
    </div>
  );
}

function CheckboxContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Checkbox Container">
      <TextContainer />
    </div>
  );
}

function Knob() {
  return <div className="-translate-y-1/2 absolute bg-white left-[2px] rounded-[3px] size-[16px] top-1/2" data-name="Knob" />;
}

function DropdownContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative rounded-[5px] shrink-0" data-name="Dropdown Container">
      <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="_Trailing">
        <div className="bg-[#d6d6d6] h-[20px] overflow-clip relative rounded-[5px] shrink-0 w-[36px]" data-name="Toggle">
          <Knob />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-between min-h-[56px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <CheckboxContainer />
      <DropdownContainer />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[16px] relative shrink-0 w-[872px]">
      <Frame65 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Row">
        <Container6 />
      </div>
    </div>
  );
}

function Frame67() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] not-italic relative shrink-0 text-[18px] text-black w-full">{t('account.actionsSection')}</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 872 1">
            <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="872" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame78() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="h-[32px] min-w-[70px] relative rounded-[5px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center min-w-[inherit] overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#ff503f] text-[12px] text-center">{t('account.deleteAccount')}</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#ff503f] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] tracking-[-0.11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t('account.deleteWarning')}
      </p>
    </div>
  );
}

function Frame66() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame67 />
      <div className="bg-white h-[32px] min-w-[70px] relative rounded-[5px] shrink-0 w-[118px]" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[12px] text-black text-center">{t('account.signOut')}</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#adadad] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <Frame78 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[872px]">
      <Container2 />
      <Frame29 />
      <Frame36 />
      <Frame64 />
      <Frame66 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start mx-auto mt-[62px] pb-[40px] w-[872px]">
      <Frame35 />
      <Frame32 />
    </div>
  );
}

function Frame72() {
  return <div className="absolute bg-[#c2c2c2] h-[352px] right-[4px] rounded-[5px] top-[4px] w-[4px]" />;
}

function EditNameModal({ editValue, onChange, onSave, onCancel }: { editValue: string; onChange: (v: string) => void; onSave: () => void; onCancel: () => void }) {
  const { t } = useLanguage();
  return (
    <div className="bg-white border border-[#ebebeb] border-solid content-stretch flex flex-col gap-[16px] items-end p-[24px] relative rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] w-[416px]">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
        <div className="border-[#ebebeb] border-b border-solid content-stretch flex flex-col h-[45px] items-start pb-[16px] relative shrink-0 w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] not-italic relative shrink-0 text-[18px] text-black">{t('personal.displayName')}</p>
        </div>
      </div>
      <div className="border border-[#ebebeb] border-solid content-stretch flex h-[40px] items-center overflow-clip pl-[16px] relative rounded-[5px] shrink-0 w-full">
        <input
          autoFocus
          className="flex-1 font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-black outline-none bg-transparent pr-[16px]"
          value={editValue}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') onSave(); if (e.key === 'Escape') onCancel(); }}
        />
      </div>
      <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
        <button
          onClick={onCancel}
          className="bg-white border border-[#adadad] border-solid content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[100px] overflow-clip px-[24px] py-[8px] relative rounded-[5px] shrink-0 cursor-pointer hover:bg-[#f9f9f9]"
        >
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-black whitespace-nowrap">{t('btn.cancel')}</p>
        </button>
        <button
          onClick={onSave}
          className="bg-black content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[100px] overflow-clip px-[24px] py-[8px] relative rounded-[5px] shrink-0 cursor-pointer hover:bg-gray-800"
        >
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">{t('btn.save')}</p>
        </button>
      </div>
      <button
        onClick={onCancel}
        className="absolute cursor-pointer flex items-center justify-center p-[4px] right-[23px] rounded-[5px] top-[23px] hover:bg-[#f0f0f0]"
      >
        <div className="overflow-clip relative shrink-0 size-[20px]">
          <div className="absolute inset-[20.58%_20.57%_20.57%_20.58%]">
            <div className="absolute inset-[-3%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4778 12.4778">
                <path d={svgPaths.p39d065e0} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function readWorkspaces(): {name: string, createdAt: string}[] {
  const raw = JSON.parse(localStorage.getItem('teamWorkspaces') || '[]');
  return raw.map((item: any) => typeof item === 'string' ? { name: item, createdAt: '' } : item);
}

function LeaveWorkspaceModal({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const workspaceName = searchParams.get('workspaceName') || localStorage.getItem('workspaceName') || 'Team workspace';
  const [emailInput, setEmailInput] = useState('');
  const [leftWorkspace, setLeftWorkspace] = useState(false);
  const canLeave = emailInput === 'demo@plaud.ai';

  const handleContinue = () => {
    const all = readWorkspaces();
    const remaining = all.filter(w => w.name !== workspaceName);
    localStorage.setItem('teamWorkspaces', JSON.stringify(remaining));
    if (localStorage.getItem('workspaceName') === workspaceName) {
      localStorage.setItem('workspaceName', remaining[0]?.name || '');
    }
    onClose();
    if (remaining.length === 0) {
      // No team workspaces left — only personal workspace remains; go there directly
      navigate('/');
    } else {
      // 1+ team workspaces remain alongside personal workspace — show selection page
      navigate('/choose-workspace');
    }
  };

  // Success state
  if (leftWorkspace) {
    return (
      <div className="fixed inset-0 z-[600] flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
        <div className="bg-white border border-[#ebebeb] border-solid flex flex-col gap-[16px] items-center p-[24px] relative rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] w-[416px]">
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            {/* Icon + text */}
            <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
              <div className="relative shrink-0 size-[60px]">
                <img alt="success" className="absolute block max-w-none size-full" src={imgCheckCircle} />
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
                <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] relative shrink-0 text-black text-[24px] whitespace-nowrap">{t('leave.leftTitle')}</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#3d3d3d] text-[14px] text-center w-[min-content]">{t('leave.leftBody', { name: workspaceName })}</p>
              </div>
            </div>
            {/* Continue button */}
            <button
              onClick={handleContinue}
              className="bg-black flex flex-1 gap-[8px] h-[40px] items-center justify-center min-w-[100px] overflow-clip px-[24px] py-[8px] relative rounded-[5px] shrink-0 w-full cursor-pointer hover:bg-gray-900"
            >
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-white text-[14px] text-center whitespace-nowrap">{t('btn.continue')}</p>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Confirmation state
  return (
    <div className="fixed inset-0 z-[600] flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
      <div className="bg-white border border-[#ebebeb] border-solid flex flex-col gap-[16px] h-[533px] items-end p-[24px] relative rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] w-[708px]">

        {/* Title + body grouped at fixed height, matching Figma's 332px section */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          {/* Title row */}
          <div className="border-b border-[#ebebeb] content-stretch flex items-center justify-between pb-[16px] relative shrink-0 w-full" style={{ height: '45px' }}>
            <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] relative shrink-0 text-black text-[18px] whitespace-nowrap">{t('leave.title', { name: workspaceName })}</p>
            <div className="cursor-pointer overflow-clip relative shrink-0 size-[20px] hover:opacity-70" onClick={onClose}>
              <div className="absolute inset-[27.61%]">
                <img alt="close" className="absolute block max-w-none size-full" src={imgXIconModal} />
              </div>
            </div>
          </div>

          {/* Body text — fixed 247px to match Figma spacing */}
          <div className="relative shrink-0 w-full" style={{ height: '247px' }}>
            <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] text-[18px] text-[#3d3d3d] mb-0">{t('leave.warning')}</p>
            <p className="leading-[22px] text-[18px] mb-0">&nbsp;</p>
            <ol className="mb-0 ps-[20px] list-decimal">
              <li className="mb-0"><span className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#f14349] text-[14px]">{t('leave.point1')}</span></li>
              <li className="mb-0"><span className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#f14349] text-[14px]">{t('leave.point2')}</span></li>
              <li className="mb-0"><span className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#f14349] text-[14px]">{t('leave.point3')}</span></li>
              <li><span className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#f14349] text-[14px]">{t('leave.point4')}</span></li>
            </ol>
            <p className="leading-[22px] text-[14px] mb-0">&nbsp;</p>
            <p className="font-['Inter:Regular',sans-serif] leading-[22px] text-[14px] text-black">{t('leave.beforeLeaving')}</p>
          </div>
        </div>

        {/* Email label */}
        <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#3d3d3d] text-[14px]">{t('leave.enterEmail')}</p>
        </div>

        {/* Email input */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <div className="border border-[#ebebeb] border-solid flex h-[40px] items-center overflow-clip pl-[16px] pr-[16px] relative rounded-[5px] shrink-0 w-full">
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder={t('leave.emailPlaceholder')}
              className="w-full text-[14px] font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-black placeholder:text-[#a3a3a3] bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="absolute bottom-[23px] right-[24px] flex gap-[12px] items-center">
          <button
            onClick={onClose}
            className="bg-white border border-[#adadad] border-solid flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[24px] py-[8px] relative rounded-[5px] shrink-0 w-[150px] cursor-pointer hover:bg-gray-50"
          >
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-black text-[14px] text-center whitespace-nowrap">{t('btn.cancel')}</p>
          </button>
          <button
            disabled={!canLeave}
            onClick={() => canLeave && setLeftWorkspace(true)}
            className={`bg-[#ff503f] flex gap-[8px] h-[40px] items-center justify-center min-w-[100px] overflow-clip px-[24px] py-[8px] relative rounded-[5px] shrink-0 transition-opacity ${canLeave ? 'opacity-100 cursor-pointer hover:bg-[#e8472f]' : 'opacity-60 cursor-not-allowed'}`}
          >
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-white text-[14px] text-center whitespace-nowrap">{t('leave.button')}</p>
          </button>
        </div>
      </div>
    </div>
  );
}

function PersonalizationContent({ displayName, avatarLetter, onEditNameClick }: { displayName: string; avatarLetter: string; onEditNameClick: () => void }) {
  const { t } = useLanguage();
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start ml-[52px] mt-[62px] pb-[56px] w-[872px]">
      {/* Personal info */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">{t('personal.infoSection')}</p>
          <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSectionDivider} /></div></div>
        </div>
        <div className="content-stretch flex gap-[32px] items-end relative shrink-0">
          <div className="bg-[#ebebeb] relative rounded-[750px] shrink-0 size-[72px]">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[26.25px] text-[33px] text-black top-[36px] whitespace-nowrap">
              <p className="leading-[39px]">{avatarLetter}</p>
            </div>
            <div className="absolute bottom-0 flex items-center justify-center right-0 size-[20px]">
              <img alt="" className="block size-[20px]" src={imgIconLogout} style={{ transform: 'rotate(270deg)' }} />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]">
            <div className="content-stretch flex h-[32px] items-center overflow-clip px-[8px] relative shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">{t('personal.displayName')}</p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[5px] shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px]">{displayName}</p>
              <img alt="" className="relative shrink-0 size-[20px] cursor-pointer hover:opacity-70" src={imgIconRename} onClick={onEditNameClick} />
            </div>
          </div>
        </div>
      </div>

      {/* Profile */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">{t('personal.infoSection')}</p>
          <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSectionDivider} /></div></div>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">{t('personal.mobileOnly')}</p>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black">{t('personal.infoSection')}</p>
          <div className="border border-[#ebebeb] border-solid content-stretch flex flex-col items-center py-[8px] relative rounded-[5px] shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] py-[8px] relative shrink-0 w-full">
              {([[t('personal.jobFunction'), t('personal.notSet')], [t('personal.industry'), t('personal.notSet')], [t('personal.seniority'), t('personal.notSet')], [t('personal.useCase'), t('personal.notSet')]] as [string,string][]).map(([label, value]) => (
                <div key={label} className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px]">{label}</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black">{t('personal.moreAbout')}</p>
          <div className="border border-[#ebebeb] border-solid content-stretch flex flex-col gap-[8px] h-[84px] items-start justify-center overflow-clip px-[12px] py-[14px] relative rounded-[5px] shrink-0 w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px]">{t('personal.editMobile')}</p>
          </div>
        </div>
      </div>

      {/* Personalization */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">{t('personal.personalizationSection')}</p>
          <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSectionDivider} /></div></div>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
          {/* Content focus */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black">{t('personal.contentFocus')}</p>
            <div className="border border-[#ebebeb] border-solid content-stretch flex h-[40px] items-center justify-between min-w-[212px] overflow-clip pl-[16px] pr-[16px] relative rounded-[5px] shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px]">{t('personal.contentFocusPlaceholder')}</p>
              <img alt="" className="relative shrink-0 size-[20px]" src={imgIconEyeClose} />
            </div>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full flex-wrap">
              {[t('personal.chip.keyPoints'), t('personal.chip.risks'), t('personal.chip.thinkWork')].map((label) => (
                <div key={label} className="bg-white border border-[#ebebeb] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[70px] overflow-clip px-[16px] py-[8px] relative rounded-[5px] shrink-0 cursor-pointer hover:bg-[#f9f9f9]">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[12px] text-black text-center whitespace-nowrap">{label}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Custom instructions */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black">{t('personal.customInstructions')}</p>
            <div className="border border-[#ebebeb] border-solid content-stretch flex h-[40px] items-center justify-between min-w-[212px] overflow-clip pl-[16px] pr-[16px] relative rounded-[5px] shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px]">{t('personal.customPlaceholder')}</p>
              <img alt="" className="relative shrink-0 size-[20px]" src={imgIconEyeClose} />
            </div>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full flex-wrap">
              {[t('personal.chip.concise'), t('personal.chip.takeaways'), t('personal.chip.practical'), t('personal.chip.actionItems')].map((label) => (
                <div key={label} className="bg-white border border-[#ebebeb] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[70px] overflow-clip px-[16px] py-[8px] relative rounded-[5px] shrink-0 cursor-pointer hover:bg-[#f9f9f9]">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[12px] text-black text-center whitespace-nowrap">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Memory */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">{t('personal.memorySection')}</p>
          <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSectionDivider} /></div></div>
        </div>
        <div className="content-stretch flex h-[56px] items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black">{t('personal.useSavedMemory')}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px]">{t('personal.memoryDesc')} <span className="underline">{t('personal.learnMore')}</span></p>
          </div>
          <div className="bg-black h-[20px] overflow-clip relative rounded-[5px] w-[36px]">
            <div className="-translate-y-1/2 absolute bg-white right-[2px] rounded-[3px] size-[16px] top-1/2" />
          </div>
        </div>
        <div className="content-stretch flex h-[56px] items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black">{t('personal.manageMemory')}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px]">{t('personal.manageMemoryDesc')}</p>
          </div>
          <div className="bg-white border border-[#adadad] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[100px] overflow-clip px-[16px] py-[8px] relative rounded-[5px] shrink-0 w-[100px]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[12px] text-center">{t('btn.manage')}</p>
          </div>
        </div>
      </div>

      {/* Leave workspace */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSectionDivider} /></div></div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
          <div
            className="border border-[#ff503f] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[70px] overflow-clip px-[16px] py-[8px] relative rounded-[5px] shrink-0 w-[131px] cursor-pointer hover:bg-[#fff5f5]"
            onClick={() => setShowLeaveModal(true)}
          >
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#ff503f] text-[12px] text-center">{t('personal.leaveWorkspace')}</p>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">{t('personal.leaveDesc')}</p>
        </div>
      </div>
      {showLeaveModal && <LeaveWorkspaceModal onClose={() => setShowLeaveModal(false)} />}
    </div>
  );
}

const imgDeleteIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none'%3E%3Cpolyline points='3 6 5 6 21 6' stroke='%23757575' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6' stroke='%23757575' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M10 11v6M14 11v6' stroke='%23757575' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";
const imgRetryIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none'%3E%3Cpolyline points='1 4 1 10 7 10' stroke='%23757575' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M3.51 15a9 9 0 1 0 .49-4.7' stroke='%23757575' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";
const imgCancelInviteIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none'%3E%3Cline x1='18' y1='6' x2='6' y2='18' stroke='%23757575' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cline x1='6' y1='6' x2='18' y2='18' stroke='%23757575' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";

function RemoveMemberModal({ name, email, workspaceName, onCancel, onRemove }: { name: string; email: string; workspaceName: string; onCancel: () => void; onRemove: () => void }) {
  const { t } = useLanguage();
  return (
    <div className="fixed inset-0 z-[200] bg-black/40 flex items-center justify-center" onClick={onCancel}>
      <div className="bg-white flex flex-col gap-[16px] items-end p-[24px] rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] w-[416px] relative" onClick={(e) => e.stopPropagation()}>
        <div className="border-[#ebebeb] border-b border-solid flex flex-col items-start pb-[16px] relative shrink-0 w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] text-[18px] text-black">{t('remove.title')}</p>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-[#3d3d3d] w-full">
          {t('remove.body', { name, email, workspace: workspaceName })}
        </p>
        <div className="flex gap-[16px] items-center justify-end">
          <button onClick={onCancel} className="bg-white border border-[#adadad] border-solid flex h-[40px] items-center justify-center min-w-[100px] overflow-clip px-[24px] py-[8px] rounded-[5px] cursor-pointer hover:bg-[#f5f5f5]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-black text-center whitespace-nowrap">{t('btn.cancel')}</p>
          </button>
          <button onClick={onRemove} className="bg-[#ff503f] flex h-[40px] items-center justify-center min-w-[100px] overflow-clip px-[24px] py-[8px] rounded-[5px] cursor-pointer hover:bg-[#e8432f]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-white text-center whitespace-nowrap">{t('remove.button')}</p>
          </button>
        </div>
        <button onClick={onCancel} className="absolute right-[24px] top-[24px] flex items-center justify-center p-[4px] rounded-[5px] hover:bg-[#f5f5f5]">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 5l10 10M15 5l-10 10" stroke="black" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </button>
      </div>
    </div>
  );
}

function ChangeRoleModal({ name, email, newRole, onCancel, onConfirm }: { name: string; email: string; newRole: 'Member' | 'Admin'; onCancel: () => void; onConfirm: () => void }) {
  const { t } = useLanguage();
  const isAdmin = newRole === 'Admin';
  return (
    <div className="fixed inset-0 z-[300] bg-black/40 flex items-center justify-center" onClick={onCancel}>
      <div className="bg-white flex flex-col gap-[16px] items-end p-[24px] rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] w-[416px] relative" onClick={e => e.stopPropagation()}>
        <div className="border-[#ebebeb] border-b border-solid flex flex-col items-start pb-[16px] relative shrink-0 w-full" style={{ height: '45px' }}>
          <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] text-[18px] text-black">{isAdmin ? t('changeRole.makeAdmin') : t('changeRole.makeMember')}</p>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-[#3d3d3d] w-full">
          {isAdmin
            ? t('changeRole.adminBody', { name, email })
            : t('changeRole.memberBody', { name, email })}
        </p>
        <div className="flex gap-[16px] items-center justify-end">
          <button onClick={onCancel} className="bg-white border border-[#adadad] border-solid flex h-[40px] items-center justify-center min-w-[100px] overflow-clip px-[24px] py-[8px] rounded-[5px] cursor-pointer hover:bg-[#f5f5f5]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-black text-center whitespace-nowrap">{t('btn.cancel')}</p>
          </button>
          <button onClick={onConfirm} className="bg-black flex h-[40px] items-center justify-center min-w-[100px] overflow-clip px-[24px] py-[8px] rounded-[5px] cursor-pointer hover:bg-gray-900">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-white text-center whitespace-nowrap">{t('btn.confirm')}</p>
          </button>
        </div>
        <button onClick={onCancel} className="absolute right-[24px] top-[24px] flex items-center justify-center p-[4px] rounded-[5px] hover:bg-[#f5f5f5]">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 5l10 10M15 5l-10 10" stroke="black" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </button>
      </div>
    </div>
  );
}

function DevicesContent({ activeMembers = [], removedEmails = new Set<string>() }: {
  activeMembers?: { email: string; name: string; role: 'Member' | 'Admin' }[];
  removedEmails?: Set<string>;
}) {
  const { t, lang } = useLanguage();
  // Device icon components (inline SVG)
  const PlaudNoteIcon = () => (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon_plaud_note">
      <div className="absolute inset-[12.5%_20.83%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.667 15">
          <path d={svgPaths.p285eca00} fill="black" />
        </svg>
      </div>
    </div>
  );

  const PlaudNoteProIcon = () => (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon_plaud_note_pro">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 18C19 19.6051 17.7394 20.9158 16.1543 20.9961L16 21H8C6.34315 21 5 19.6569 5 18V3H19V18ZM6.5 18C6.5 18.8284 7.17157 19.5 8 19.5H16C16.8284 19.5 17.5 18.8284 17.5 18V8.61328H6.5V18ZM6.5 7.38672H17.5V4.5H6.5V7.38672ZM12.5 7H9V5H12.5V7ZM15.5 5C16.0523 5 16.5 5.44772 16.5 6C16.5 6.55228 16.0523 7 15.5 7C14.9477 7 14.5 6.55228 14.5 6C14.5 5.44772 14.9477 5 15.5 5Z" fill="black"/>
      </svg>
    </div>
  );

  const PlaudNotePinIcon = () => (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon_plaud_notepin">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9346 3.0498C14.5938 3.04992 16.7499 5.20602 16.75 7.86523V15.9346C16.75 18.5939 14.5938 20.7499 11.9346 20.75C9.2752 20.75 7.11914 18.5939 7.11914 15.9346V7.86523C7.11924 5.20595 9.27526 3.0498 11.9346 3.0498ZM11.9346 4.5498C10.1037 4.5498 8.61924 6.03438 8.61914 7.86523V15.9346C8.61914 17.7655 10.1036 19.25 11.9346 19.25C13.7654 19.2499 15.25 17.7654 15.25 15.9346V7.86523C15.2499 6.03445 13.7654 4.54992 11.9346 4.5498ZM12 6C12.6122 6 13.1092 6.49622 13.1094 7.1084C13.1094 7.72071 12.6123 8.21777 12 8.21777C11.3878 8.21761 10.8916 7.72061 10.8916 7.1084C10.8918 6.49632 11.3879 6.00016 12 6Z" fill="black"/>
      </svg>
    </div>
  );

  const devices = [
    { name: 'My Plaud Note',       nameJa: '私のPlaud Note',    sn: '712113416884501219', type: 'note',     ownerEmail: 'demo@plaud.ai',    ownerNameEn: 'Demo Account (You)', ownerNameJa: 'デモアカウント（自分）' },
    { name: "Yuki's Note Pro",    nameJa: '由紀のNote Pro',     sn: '712113416884501220', type: 'note_pro', ownerEmail: 'yuki@plaud.ai',    ownerNameEn: 'Yuki Tanaka',        ownerNameJa: '田中 由紀' },
    { name: "Kenji's NotePin",    nameJa: '健二のNotePin',      sn: '712113416884501221', type: 'notepin',  ownerEmail: 'kenji@plaud.ai',   ownerNameEn: 'Kenji Watanabe',     ownerNameJa: '渡辺 健二' },
    { name: "Hana's Plaud Note",  nameJa: '花のPlaud Note',     sn: '712113416884501222', type: 'note',     ownerEmail: 'hana@plaud.ai',    ownerNameEn: 'Hana Yamamoto',      ownerNameJa: '山本 花' },
    { name: "Takeshi's Note Pro", nameJa: '武のNote Pro',       sn: '712113416884501223', type: 'note_pro', ownerEmail: 'takeshi@plaud.ai', ownerNameEn: 'Takeshi Nakamura',   ownerNameJa: '中村 武' },
  ];

  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start ml-[52px] mt-[62px] pb-[56px] w-[872px]">
      {/* Header */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">{t('settings.devices')}</p>
        <div className="bg-[#ebebeb] h-px shrink-0 w-full" />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-[#3d3d3d] w-full">{t('devices.viewOnly')}</p>
      </div>

      {/* Table */}
      <div className="content-stretch flex items-start relative shrink-0 w-full">
        {/* Device column */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[558px]">
          <div className="content-stretch flex h-[40px] items-center overflow-clip p-[8px] relative shrink-0 w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px]">{t('devices.col.device')}</p>
          </div>
          {devices.map((device) => (
            <div key={device.sn} className="content-stretch flex h-[48px] items-center overflow-clip p-[8px] relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] h-full items-center py-[4px] relative shrink-0">
                {device.type === 'note' ? <PlaudNoteIcon /> : device.type === 'note_pro' ? <PlaudNoteProIcon /> : <PlaudNotePinIcon />}
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 whitespace-nowrap">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black">{lang === 'ja' ? device.nameJa : device.name}</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[#7a7a7a]">{device.sn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Last used by column */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160px]">
          <div className="content-stretch flex h-[40px] items-center overflow-clip p-[8px] relative shrink-0 w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] w-[113px]">{t('devices.col.lastUsed')}</p>
          </div>
          {devices.map((device) => (
            <div key={device.sn} className="content-stretch flex h-[48px] items-center overflow-clip px-[8px] py-[4px] relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black w-[152px]">{lang === 'ja' ? device.ownerNameJa : device.ownerNameEn}</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[#7a7a7a] whitespace-nowrap">{device.ownerEmail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Workspace access column */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160px]">
          <div className="content-stretch flex h-[40px] items-center overflow-clip p-[8px] relative shrink-0 w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">{t('devices.col.access')}</p>
          </div>
          {devices.map((device) => {
            const isActive = !removedEmails.has(device.ownerEmail);
            return (
              <div key={device.sn} className="content-stretch flex h-[48px] items-center overflow-clip p-[8px] relative shrink-0 w-full">
                <div className={`flex h-[20px] items-center justify-center px-[8px] relative rounded-[5px] shrink-0 ${isActive ? 'bg-[rgba(54,217,108,0.15)]' : 'bg-[rgba(255,80,63,0.2)]'}`}>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">{isActive ? t('devices.active') : t('devices.inactive')}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MembersRolesContent({ onInviteMembersClick, pendingInvites = 0, invitedMembers = [], activeMembers = [], workspaceName = 'Team workspace', removedEmails = new Set<string>(), onRemoveEmail }: { onInviteMembersClick?: () => void; pendingInvites?: number; invitedMembers?: { email: string; role: 'Member' | 'Admin' }[]; activeMembers?: { email: string; name: string; role: 'Member' | 'Admin' }[]; workspaceName?: string; removedEmails?: Set<string>; onRemoveEmail?: (email: string) => void }) {
  const { t, lang } = useLanguage();
  const [memberTab, setMemberTab] = useState<'all' | 'active' | 'pending'>('all');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState<string | null>(null);
  const [memberRoles, setMemberRoles] = useState<{ [email: string]: 'Member' | 'Admin' }>(() => {
    const init: { [email: string]: 'Member' | 'Admin' } = { 'demo@plaud.ai': 'Admin' };
    activeMembers.forEach(m => { init[m.email] = m.role; });
    invitedMembers.forEach(m => { init[m.email] = m.role; });
    return init;
  });
  // Sync newly invited members' roles into local state (handles invite while settings is open)
  useEffect(() => {
    setMemberRoles(prev => {
      const updated = { ...prev };
      let changed = false;
      invitedMembers.forEach(m => {
        if (!(m.email in updated)) {
          updated[m.email] = m.role;
          changed = true;
        }
      });
      return changed ? updated : prev;
    });
  }, [invitedMembers]);

  const [roleChangeTarget, setRoleChangeTarget] = useState<{ email: string; name: string; newRole: 'Member' | 'Admin' } | null>(null);
  const [removeMemberTarget, setRemoveMemberTarget] = useState<{ name: string; email: string } | null>(null);
  const [inviteActionToast, setInviteActionToast] = useState<{ type: 'resent' | 'canceled'; email: string } | null>(null);
  const [roleUpdatedToast, setRoleUpdatedToast] = useState(false);
  const [memberRemovedToast, setMemberRemovedToast] = useState(false);

  // Bilingual name map (keyed by email)
  const nameJaMap: Record<string, string> = {
    'demo@plaud.ai':    'デモアカウント',
    'yuki@plaud.ai':    '田中 由紀',
    'kenji@plaud.ai':   '渡辺 健二',
    'hana@plaud.ai':    '山本 花',
    'takeshi@plaud.ai': '中村 武',
  };

  // All active members: current user first, then pre-configured others
  const allActiveMembers = [
    { email: 'demo@plaud.ai', name: 'Demo Account', role: 'Admin' as const, isCurrentUser: true },
    ...activeMembers.map(m => ({ ...m, isCurrentUser: false as const })),
  ];
  const visibleActive = allActiveMembers.filter(m => !removedEmails.has(m.email));
  const visiblePending = invitedMembers.filter(m => !removedEmails.has(m.email));
  const activeCount = visibleActive.length;
  const pendingCount = visiblePending.length;

  // Admin guard: prevent removing the last admin
  const adminCount = visibleActive.filter(m => (memberRoles[m.email] || m.role) === 'Admin').length
    + visiblePending.filter(m => (memberRoles[m.email] || 'Member') === 'Admin').length;

  const showActive = memberTab === 'all' || memberTab === 'active';
  const showPending = memberTab === 'all' || memberTab === 'pending';

  const tabClass = (tab: 'all' | 'active' | 'pending') =>
    memberTab === tab
      ? "border-black border-b-2 border-solid content-stretch flex gap-[8px] h-full items-center justify-center py-[8px] relative shrink-0 cursor-pointer"
      : "content-stretch flex gap-[8px] h-full items-center justify-center py-[8px] relative shrink-0 cursor-pointer hover:text-black";
  const tabTextClass = (tab: 'all' | 'active' | 'pending') =>
    memberTab === tab
      ? "font-['Inter:Semibold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-black text-[14px] whitespace-nowrap"
      : "font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap";

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start mx-auto mt-[54px] pb-[56px] w-[872px]" onClick={() => { setOpenDropdown(null); setRoleDropdownOpen(null); }}>
      {/* Header */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">{t('members.title')}</p>
        <div onClick={onInviteMembersClick} className="bg-black content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[100px] overflow-clip px-[16px] py-[8px] relative rounded-[5px] shrink-0 w-[120px] cursor-pointer hover:bg-gray-800">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[12px] text-center text-white">{t('members.invite')}</p>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSectionDivider} /></div></div>
      {/* Stats */}
      <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
        <div className="bg-white border border-[#ebebeb] border-solid content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[16px] relative rounded-[5px] shrink-0 w-[424px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">{t('members.activeCount')}</p>
          <p className="font-['Inter:Light',sans-serif] font-light leading-[30px] relative shrink-0 text-[20px] text-[#1f1f1f] whitespace-nowrap">{activeCount}</p>
        </div>
        <div className="bg-white border border-[#ebebeb] border-solid content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[16px] relative rounded-[5px] shrink-0 w-[424px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">{t('members.pendingCount')}</p>
          <p className="font-['Inter:Light',sans-serif] font-light leading-[30px] relative shrink-0 text-[20px] text-[#1f1f1f] whitespace-nowrap">{pendingCount}</p>
        </div>
      </div>
      {/* Tabs */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="border-[#ebebeb] border-b border-solid content-stretch flex h-[56px] items-center gap-[24px] relative shrink-0 w-full">
          <div className={tabClass('all')} onClick={() => setMemberTab('all')}>
            <p className={tabTextClass('all')}>{`${t('members.tabs.all')} (${activeCount + pendingCount})`}</p>
          </div>
          <div className={tabClass('active')} onClick={() => setMemberTab('active')}>
            <p className={tabTextClass('active')}>{`${t('members.tabs.active')} (${activeCount})`}</p>
          </div>
          <div className={tabClass('pending')} onClick={() => setMemberTab('pending')}>
            <p className={tabTextClass('pending')}>{`${t('members.tabs.pending')} (${pendingCount})`}</p>
          </div>
        </div>
        {/* Table */}
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full pt-[0px]">
          {/* Name column */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
            <div className="content-stretch flex h-[40px] items-center p-[8px] relative shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">{t('members.col.name')}</p>
            </div>
            {/* Active member rows */}
            {showActive && visibleActive.map(m => (
              <div key={m.email} className="content-stretch flex gap-[10px] items-center px-[8px] py-[4px] relative shrink-0 w-full">
                <div className="bg-[#d6d6d6] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[5px] shrink-0 size-[24px]">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-black text-center">{m.name.charAt(0).toUpperCase()}</p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-black w-[152px] overflow-hidden text-ellipsis whitespace-nowrap">{m.isCurrentUser ? `${lang === 'ja' ? (nameJaMap[m.email] ?? m.name) : m.name} (${lang === 'ja' ? '自分' : 'You'})` : (lang === 'ja' ? (nameJaMap[m.email] ?? m.name) : m.name)}</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">{m.email}</p>
                </div>
              </div>
            ))}
            {/* Pending invited rows */}
            {showPending && visiblePending.map(({ email }) => {
              const name = email.split('@')[0];
              return (
                <div key={email} className="content-stretch flex gap-[10px] items-center px-[8px] py-[4px] relative shrink-0 w-full">
                  <div className="bg-[#d6d6d6] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[5px] shrink-0 size-[24px]">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-black text-center">{name.charAt(0).toUpperCase()}</p>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-black w-[152px] overflow-hidden text-ellipsis whitespace-nowrap">{name}</p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">{email}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Role column */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[110px]">
            <div className="content-stretch flex h-[40px] items-center p-[8px] relative shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">{t('members.col.role')}</p>
            </div>
            {showActive && visibleActive.map(m => {
              const { email, name } = m;
              const currentRole = memberRoles[email] || m.role;
              const isOpen = roleDropdownOpen === email;
              const isLastAdmin = adminCount === 1 && currentRole === 'Admin';
              return (
                <div key={email} className="content-stretch flex h-[48px] items-center p-[8px] relative shrink-0 w-full">
                  <div className="relative" onClick={e => e.stopPropagation()}>
                    {isLastAdmin ? (
                      <div className="group relative hover:bg-[#ebebeb] rounded-[5px]">
                        <button className="content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[70px] overflow-clip p-[8px] relative rounded-[5px] shrink-0 cursor-not-allowed" disabled>
                          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-black text-center">{currentRole === 'Admin' ? t('members.role.admin') : t('members.role.member')}</p>
                          <svg className="shrink-0 size-[16px]" fill="none" viewBox="0 0 16 16"><path d="M4 6l4 4 4-4" stroke="#999" strokeWidth="1.5" strokeLinejoin="round" /></svg>
                        </button>
                        <div className="absolute bottom-[calc(100%+6px)] left-1/2 -translate-x-1/2 hidden group-hover:block z-50 pointer-events-none">
                          <div className="bg-[rgba(0,0,0,0.6)] backdrop-blur-[40px] text-white text-[14px] leading-[22px] font-['Inter:Regular',sans-serif] font-normal rounded-[5px] px-[8px] py-[8px] whitespace-nowrap">
                            {t('members.atLeastOneAdmin')}
                          </div>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[rgba(0,0,0,0.6)]" />
                        </div>
                      </div>
                    ) : (
                      <button className={`${isOpen ? 'bg-[#ebebeb]' : 'hover:bg-[#ebebeb]'} content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[70px] overflow-clip p-[8px] relative rounded-[5px] shrink-0 cursor-pointer`}
                        onClick={() => setRoleDropdownOpen(isOpen ? null : email)}>
                        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-black text-center">{currentRole === 'Admin' ? t('members.role.admin') : t('members.role.member')}</p>
                        <svg className="shrink-0 size-[16px]" fill="none" viewBox="0 0 16 16"><path d="M4 6l4 4 4-4" stroke="black" strokeWidth="1.5" strokeLinejoin="round" /></svg>
                      </button>
                    )}
                    {!isLastAdmin && isOpen && (
                      <div className="absolute left-0 top-[36px] z-50 bg-white border border-[#ebebeb] rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] py-[8px] w-[248px]">
                        {(['Admin', 'Member'] as const).map(opt => (
                          <div key={opt} className="flex flex-col items-start px-[16px] py-[8px] cursor-pointer hover:bg-[#f5f5f5]"
                            onClick={() => { setRoleDropdownOpen(null); if (opt !== currentRole) setRoleChangeTarget({ email, name, newRole: opt }); }}>
                            <div className="flex gap-[8px] items-center w-full">
                              <div className="size-[20px] flex items-center justify-center shrink-0">
                                {currentRole === opt && <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 4l3 3 7-7" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                              </div>
                              <p className="flex-1 font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-[#3d3d3d]">{opt === 'Admin' ? t('members.role.admin') : t('members.role.member')}</p>
                            </div>
                            <div className="flex items-center pl-[28px] w-full">
                              <p className="flex-1 font-['Inter:Regular',sans-serif] font-normal leading-[18px] text-[12px] text-[#7a7a7a]">{opt === 'Admin' ? t('members.role.adminDesc') : t('members.role.memberDesc')}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            {showPending && visiblePending.map(({ email }) => {
              const name = email.split('@')[0];
              const currentRole = memberRoles[email] || 'Member';
              const isOpen = roleDropdownOpen === email;
              return (
                <div key={email} className="content-stretch flex h-[48px] items-center p-[8px] relative shrink-0 w-full">
                  <div className="relative" onClick={e => e.stopPropagation()}>
                    <button className={`${isOpen ? 'bg-[#ebebeb]' : 'hover:bg-[#ebebeb]'} content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[70px] overflow-clip p-[8px] relative rounded-[5px] shrink-0 cursor-pointer`}
                      onClick={() => setRoleDropdownOpen(isOpen ? null : email)}>
                      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[#3d3d3d] text-center">{currentRole === 'Admin' ? t('members.role.admin') : t('members.role.member')}</p>
                      <svg className="shrink-0 size-[16px]" fill="none" viewBox="0 0 16 16"><path d="M4 6l4 4 4-4" stroke="black" strokeWidth="1.5" strokeLinejoin="round" /></svg>
                    </button>
                    {isOpen && (
                      <div className="absolute left-0 top-[36px] z-50 bg-white border border-[#ebebeb] rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] py-[8px] w-[248px]">
                        {(['Admin', 'Member'] as const).map(opt => (
                          <div key={opt} className="flex flex-col items-start px-[16px] py-[8px] cursor-pointer hover:bg-[#f5f5f5]"
                            onClick={() => { setRoleDropdownOpen(null); if (opt !== currentRole) setRoleChangeTarget({ email, name, newRole: opt }); }}>
                            <div className="flex gap-[8px] items-center w-full">
                              <div className="size-[20px] flex items-center justify-center shrink-0">
                                {currentRole === opt && <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 4l3 3 7-7" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                              </div>
                              <p className="flex-1 font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-[#3d3d3d]">{opt === 'Admin' ? t('members.role.admin') : t('members.role.member')}</p>
                            </div>
                            <div className="flex items-center pl-[28px] w-full">
                              <p className="flex-1 font-['Inter:Regular',sans-serif] font-normal leading-[18px] text-[12px] text-[#7a7a7a]">{opt === 'Admin' ? t('members.role.adminDesc') : t('members.role.memberDesc')}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {/* Status column */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88px]">
            <div className="content-stretch flex h-[40px] items-center p-[8px] relative shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">{t('members.col.status')}</p>
            </div>
            {showActive && visibleActive.map(m => (
              <div key={m.email} className="content-stretch flex h-[48px] items-center p-[8px] relative shrink-0 w-full">
                <div className="bg-[rgba(54,217,108,0.15)] content-stretch flex h-[20px] items-center justify-center px-[8px] relative rounded-[5px] shrink-0">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-black whitespace-nowrap">{t('members.status.active')}</p>
                </div>
              </div>
            ))}
            {showPending && visiblePending.map(({ email }) => (
              <div key={email} className="content-stretch flex h-[48px] items-center p-[8px] relative shrink-0 w-full">
                <div className="bg-[#ebebeb] content-stretch flex h-[20px] items-center justify-center px-[8px] relative rounded-[5px] shrink-0">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-black whitespace-nowrap">{t('members.status.pending')}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Joined column */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[120px]">
            <div className="content-stretch flex h-[40px] items-center p-[8px] relative shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">{t('members.col.joined')}</p>
            </div>
            {showActive && visibleActive.map(m => (
              <div key={m.email} className="content-stretch flex h-[48px] items-center p-[8px] relative shrink-0 w-full">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">{m.isCurrentUser ? t('members.joined.current') : t('members.joined.other')}</p>
              </div>
            ))}
            {showPending && visiblePending.map(({ email }) => (
              <div key={email} className="content-stretch flex h-[48px] items-center p-[8px] relative shrink-0 w-full">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">-</p>
              </div>
            ))}
          </div>
          {/* Last active column */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160px]">
            <div className="content-stretch flex h-[40px] items-center p-[8px] relative shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">{t('members.col.lastActive')}</p>
            </div>
            {showActive && visibleActive.map(m => {
              const lastActiveMap: Record<string, string> = {
                'demo@plaud.ai':    t('members.lastActive.today'),
                'yuki@plaud.ai':    t('members.lastActive.yesterday'),
                'kenji@plaud.ai':   t('members.lastActive.daysAgo', { n: 7 }),
                'hana@plaud.ai':    t('members.lastActive.daysAgo', { n: 3 }),
                'takeshi@plaud.ai': t('members.lastActive.daysAgo', { n: 2 }),
              };
              return (
                <div key={m.email} className="content-stretch flex h-[48px] items-center p-[8px] relative shrink-0 w-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">{lastActiveMap[m.email] ?? 'Recently'}</p>
                </div>
              );
            })}
            {showPending && visiblePending.map(({ email }) => (
              <div key={email} className="content-stretch flex h-[48px] items-center p-[8px] relative shrink-0 w-full">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">-</p>
              </div>
            ))}
          </div>
          {/* Actions column */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[64px]">
            <div className="content-stretch flex h-[40px] items-center justify-end p-[8px] relative shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">{t('members.col.actions')}</p>
            </div>
            {showActive && visibleActive.map(m => {
              const dropKey = `active-${m.email}`;
              const currentRole = memberRoles[m.email] || m.role;
              const isLastAdmin = adminCount === 1 && currentRole === 'Admin';
              return (
                <div key={m.email} className="content-stretch flex h-[48px] items-center justify-end p-[8px] relative shrink-0 w-full">
                  <div className="relative">
                    <div className="cursor-pointer flex items-center gap-[3px] hover:opacity-70" onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === dropKey ? null : dropKey); }}>
                      <div className="bg-black rounded-full size-[3px]" />
                      <div className="bg-black rounded-full size-[3px]" />
                      <div className="bg-black rounded-full size-[3px]" />
                    </div>
                    {openDropdown === dropKey && (
                      <div className="absolute right-0 top-[20px] z-50 bg-white border border-[#ebebeb] border-solid rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] py-[8px] w-[200px]" onClick={(e) => e.stopPropagation()}>
                        {isLastAdmin ? (
                          <div className="bg-[#ebebeb] flex items-center gap-[8px] px-[16px] py-[8px] rounded-[5px] cursor-not-allowed">
                            <div className="overflow-clip relative shrink-0 size-[20px] opacity-40">
                              <div className="absolute flex inset-[15.38%_16.99%_13.33%_16.96%] items-center justify-center">
                                <div className="flex-none h-[14.26px] rotate-180 w-[13.209px]">
                                  <img alt="" className="absolute block max-w-none size-full" src={imgDeleteIcon} />
                                </div>
                              </div>
                            </div>
                            <p className="flex-1 font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#a3a3a3] text-[14px]">{t('members.action.remove')}</p>
                          </div>
                        ) : (
                          <div className="group flex items-center gap-[8px] px-[16px] py-[8px] cursor-pointer hover:bg-[#ebebeb] rounded-[5px]" onClick={() => { setOpenDropdown(null); setRemoveMemberTarget({ name: m.name, email: m.email }); }}>
                            <div className="overflow-clip relative shrink-0 size-[20px]">
                              <div className="absolute flex inset-[15.38%_16.99%_13.33%_16.96%] items-center justify-center">
                                <div className="flex-none h-[14.26px] rotate-180 w-[13.209px]">
                                  <img alt="" className="absolute block max-w-none size-full" src={imgDeleteIcon} />
                                </div>
                              </div>
                            </div>
                            <p className="flex-1 font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#3d3d3d] group-hover:text-[#ff503f] text-[14px]">{t('members.action.remove')}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            {showPending && visiblePending.map(({ email }) => (
              <div key={email} className="content-stretch flex h-[48px] items-center justify-end p-[8px] relative shrink-0 w-full">
                <div className="relative">
                  <div className="cursor-pointer flex items-center gap-[3px] hover:opacity-70" onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === email ? null : email); }}>
                    <div className="bg-black rounded-full size-[3px]" />
                    <div className="bg-black rounded-full size-[3px]" />
                    <div className="bg-black rounded-full size-[3px]" />
                  </div>
                  {openDropdown === email && (
                    <div className="absolute right-0 top-[20px] z-50 bg-white border border-[#ebebeb] border-solid rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] py-[8px] w-[200px]" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center gap-[8px] px-[16px] py-[8px] cursor-pointer hover:bg-[#ebebeb] rounded-[5px]"
                        onClick={() => { setOpenDropdown(null); setInviteActionToast({ type: 'resent', email }); setTimeout(() => setInviteActionToast(null), 5000); }}>
                        <div className="overflow-clip relative shrink-0 size-[20px]">
                          <div className="absolute inset-[13.43%_18.33%_18.33%_18.33%]">
                            <img alt="" className="absolute block max-w-none size-full" src={imgRetryIcon} />
                          </div>
                        </div>
                        <p className="flex-1 font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#3d3d3d] text-[14px]">{t('members.action.resend')}</p>
                      </div>
                      <div className="flex items-center gap-[8px] px-[16px] py-[8px] cursor-pointer hover:bg-[#ebebeb] rounded-[5px]"
                        onClick={() => { setOpenDropdown(null); onRemoveEmail?.(email); setInviteActionToast({ type: 'canceled', email }); setTimeout(() => setInviteActionToast(null), 5000); }}>
                        <div className="overflow-clip relative shrink-0 size-[20px]">
                          <div className="absolute flex inset-[15.38%_16.99%_13.33%_16.96%] items-center justify-center">
                            <div className="flex-none h-[14.26px] rotate-180 w-[13.209px]">
                              <img alt="" className="absolute block max-w-none size-full" src={imgCancelInviteIcon} />
                            </div>
                          </div>
                        </div>
                        <p className="flex-1 font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#3d3d3d] text-[14px]">{t('members.action.cancel')}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {removeMemberTarget && (
        <RemoveMemberModal
          name={removeMemberTarget.name}
          email={removeMemberTarget.email}
          workspaceName={workspaceName}
          onCancel={() => setRemoveMemberTarget(null)}
          onRemove={() => {
            onRemoveEmail?.(removeMemberTarget!.email);
            setRemoveMemberTarget(null);
            setMemberRemovedToast(true);
            setTimeout(() => setMemberRemovedToast(false), 3000);
          }}
        />
      )}
      {roleChangeTarget && (
        <ChangeRoleModal
          name={roleChangeTarget.name}
          email={roleChangeTarget.email}
          newRole={roleChangeTarget.newRole}
          onCancel={() => setRoleChangeTarget(null)}
          onConfirm={() => {
            setMemberRoles(prev => ({ ...prev, [roleChangeTarget!.email]: roleChangeTarget!.newRole }));
            setRoleChangeTarget(null);
            setRoleUpdatedToast(true);
            setTimeout(() => setRoleUpdatedToast(false), 3000);
          }}
        />
      )}
      {inviteActionToast && (
        <div className="fixed left-1/2 -translate-x-1/2 z-[700]" style={{ top: '60px' }}>
          <div className="flex gap-[24px] items-center overflow-clip px-[16px] py-[8px] rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] border border-[rgba(0,0,0,0.08)]"
            style={{ background: 'linear-gradient(90deg, rgba(54,217,108,0.15) 0%, rgba(54,217,108,0.15) 100%), white' }}>
            <div className="flex gap-[8px] items-center shrink-0">
              <svg className="shrink-0 size-[20px]" fill="none" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="9" stroke="#1A8038" strokeWidth="1.5" />
                <path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="#1A8038" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-black text-[14px] whitespace-nowrap">
                {inviteActionToast.type === 'resent' ? t('members.toast.resent', { email: inviteActionToast.email }) : t('members.toast.canceled')}
              </p>
            </div>
            <button onClick={() => setInviteActionToast(null)} className="overflow-clip relative shrink-0 size-[20px] flex items-center justify-center hover:opacity-70">
              <svg className="size-[11px]" fill="none" viewBox="0 0 11 11"><path d="M1 1l9 9M10 1l-9 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </button>
          </div>
        </div>
      )}
      {roleUpdatedToast && (
        <div className="fixed left-1/2 -translate-x-1/2 z-[700]" style={{ top: '60px' }}>
          <div className="flex gap-[24px] items-center overflow-clip px-[16px] py-[8px] rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] border border-[rgba(0,0,0,0.08)]"
            style={{ background: 'linear-gradient(90deg, rgba(54,217,108,0.15) 0%, rgba(54,217,108,0.15) 100%), white' }}>
            <div className="flex gap-[8px] items-center shrink-0">
              <svg className="shrink-0 size-[20px]" fill="none" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="9" stroke="#1A8038" strokeWidth="1.5" />
                <path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="#1A8038" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-black text-[14px] whitespace-nowrap">{t('members.toast.roleUpdated')}</p>
            </div>
            <button onClick={() => setRoleUpdatedToast(false)} className="overflow-clip relative shrink-0 size-[20px] flex items-center justify-center hover:opacity-70">
              <svg className="size-[11px]" fill="none" viewBox="0 0 11 11"><path d="M1 1l9 9M10 1l-9 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </button>
          </div>
        </div>
      )}
      {memberRemovedToast && (
        <div className="fixed left-1/2 -translate-x-1/2 z-[700]" style={{ top: '60px' }}>
          <div className="flex gap-[24px] items-center overflow-clip px-[16px] py-[8px] rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] border border-[rgba(0,0,0,0.08)]"
            style={{ background: 'linear-gradient(90deg, rgba(54,217,108,0.15) 0%, rgba(54,217,108,0.15) 100%), white' }}>
            <div className="flex gap-[8px] items-center shrink-0">
              <svg className="shrink-0 size-[20px]" fill="none" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="9" stroke="#1A8038" strokeWidth="1.5" />
                <path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="#1A8038" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-black text-[14px] whitespace-nowrap">{t('members.toast.removed')}</p>
            </div>
            <button onClick={() => setMemberRemovedToast(false)} className="overflow-clip relative shrink-0 size-[20px] flex items-center justify-center hover:opacity-70">
              <svg className="size-[11px]" fill="none" viewBox="0 0 11 11"><path d="M1 1l9 9M10 1l-9 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function GeneralContent({ workspaceName = 'Team workspace' }: { workspaceName?: string }) {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start ml-[52px] mt-[62px] pb-[56px] w-[872px]">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">{t('general.title')}</p>
          <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSectionDivider} /></div></div>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black">{t('general.workspaceName')}</p>
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[5px] shrink-0">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-[#3d3d3d]">{workspaceName}</p>
            <img alt="" className="relative shrink-0 size-[20px] cursor-pointer hover:opacity-70" src={imgIconRename} />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black">{t('general.workspaceIcon')}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[#7a7a7a]">{t('general.iconDesc')}</p>
          {/* Workspace icon - black circle with Plaud logo */}
          <div className="relative size-[72px] shrink-0 cursor-pointer group">
            <div className="bg-black rounded-full size-[72px] flex items-center justify-center">
              {/* Plaud logo in white */}
              <div className="overflow-clip relative size-[43px]">
                <div className="absolute inset-[20.31%_15.36%_21.03%_15.21%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.886 11.7324">
                    <path d={svgPaths.p45fd370} fill="white" stroke="white" strokeWidth="0.833333" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Upload badge */}
            <div className="absolute bottom-0 right-0 size-[20px] bg-white border border-[#ebebeb] rounded-full flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="#757575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="17 8 12 3 7 8" stroke="#757575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="3" x2="12" y2="15" stroke="#757575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">{t('general.dataRegion')}</p>
          <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSectionDivider} /></div></div>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black">{t('general.location')}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-[#3d3d3d]">{t('general.locationValue')}</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">{t('general.privateCloud')}</p>
          <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSectionDivider} /></div></div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[#7a7a7a]">{t('general.privateCloudDesc')}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[#7a7a7a]">{t('general.privateCloudPoint1')}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[#7a7a7a]">{t('general.privateCloudPoint2')}</p>
        </div>
      </div>
    </div>
  );
}

function SwitchPlanModal({ direction, totalSeats, onCancel, onConfirm }: { direction: 'toMonthly' | 'toAnnual'; totalSeats: number; onCancel: () => void; onConfirm: () => void }) {
  const { t } = useLanguage();
  const annualPricePerSeat = 30;
  const monthlyPricePerSeat = 35;
  const annualTotal = totalSeats * annualPricePerSeat * 12;
  const monthlyTotal = totalSeats * monthlyPricePerSeat;
  const fmt = (n: number) => `$${n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

  const toMonthly = direction === 'toMonthly';

  const proratedAnnualRefund = (364 / 365) * annualTotal;
  const accountCredit = proratedAnnualRefund - monthlyTotal;
  const proratedMonthlyCredit = (29 / 30) * monthlyTotal;
  const amountDueToday = annualTotal - proratedMonthlyCredit;

  const title = toMonthly ? t('billing.switchToMonthly') : t('billing.switchToAnnual');
  const description = toMonthly
    ? "You're switching from annual to monthly billing. Your remaining annual subscription value will be refunded as a credit to your account."
    : "You'll save more with annual billing. Your unused monthly time will be prorated and applied to your new plan.";

  const row1Label = toMonthly ? 'Prorated annual refund' : 'Prorated credit';
  const row1Value = toMonthly ? fmt(proratedAnnualRefund) : fmt(proratedMonthlyCredit);
  const row2Label = toMonthly ? 'First monthly payment' : 'Annual price';
  const row2Value = toMonthly ? fmt(monthlyTotal) : fmt(annualTotal);
  const row3Label = toMonthly ? 'Account credit' : 'Amount due today';
  const row3Value = toMonthly ? fmt(accountCredit) : fmt(amountDueToday);

  return (
    <div className="fixed inset-0 z-[400] bg-black/40 flex items-center justify-center" onClick={onCancel}>
      <div
        className="bg-white rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] w-[480px] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-[24px] py-[16px] border-b border-[#ccc]">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[18px] leading-[28px] text-black">{title}</p>
        </div>
        {/* Body */}
        <div className="px-[24px] pt-[16px] pb-[8px] flex flex-col gap-[16px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-[#3d3d3d]">{description}</p>
          {/* Pricing rows */}
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between w-full py-[8px]">
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-[#3d3d3d]">{row1Label}</p>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[22px] text-black">{row1Value}</p>
            </div>
            <div className="flex items-center justify-between w-full py-[8px]">
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-[#3d3d3d]">{row2Label}</p>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[22px] text-black">{row2Value}</p>
            </div>
            <div className="border-t border-[#ebebeb]" />
            <div className="flex items-center justify-between w-full py-[8px]">
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-[#3d3d3d]">{row3Label}</p>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[22px] text-[#8f53ed]">{row3Value}</p>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="flex items-center justify-end gap-[16px] px-[24px] py-[16px]">
          <button
            onClick={onCancel}
            className="h-[40px] min-w-[100px] px-[24px] bg-white border border-[#adadad] rounded-[5px] font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-black cursor-pointer hover:bg-[#f9f9f9] transition-colors"
          >
            {t('btn.cancel')}
          </button>
          <button
            onClick={onConfirm}
            className="h-[40px] min-w-[100px] px-[24px] bg-black rounded-[5px] font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[22px] text-white cursor-pointer hover:bg-gray-800 transition-colors"
          >
            {t('btn.switch')}
          </button>
        </div>
      </div>
    </div>
  );
}

function SwitchSuccessModal({ direction, onClose }: { direction: 'toMonthly' | 'toAnnual'; onClose: () => void }) {
  const { t } = useLanguage();
  const toMonthly = direction === 'toMonthly';
  const bodyText = toMonthly
    ? t('switchModal.successMonthly')
    : t('switchModal.successAnnual');

  return (
    <div className="fixed inset-0 z-[500] bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] w-[400px] flex flex-col overflow-hidden">
        {/* Confetti illustration */}
        <div className="flex items-center justify-center pt-[32px] pb-[8px]">
          <img alt="" src={imgConfettiPopper} className="w-[192px] h-[96px] object-cover" />
        </div>
        {/* Heading */}
        <div className="px-[24px] pt-[8px] pb-[4px] text-center">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[24px] leading-[36px] text-black">{t('switchModal.successTitle')}</p>
        </div>
        {/* Body */}
        <div className="px-[24px] py-[16px] text-center">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-[#3d3d3d]">{bodyText}</p>
        </div>
        {/* Button */}
        <div className="px-[24px] pb-[24px]">
          <button
            onClick={onClose}
            className="w-full h-[48px] bg-black rounded-[5px] font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[22px] text-white cursor-pointer hover:bg-gray-800 transition-colors"
          >
            {t('btn.gotIt')}
          </button>
        </div>
      </div>
    </div>
  );
}

function AnnualToMonthlyModal({ onCancel, onConfirm }: { onCancel: () => void; onConfirm: () => void }) {
  const { t } = useLanguage();
  return (
    <div className="fixed inset-0 z-[400] bg-black/40 flex items-center justify-center" onClick={onCancel}>
      <div
        className="bg-white rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] w-[480px] flex flex-col overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* X close button */}
        <button
          onClick={onCancel}
          className="absolute right-[24px] top-[24px] flex items-center justify-center p-[4px] rounded-[5px] hover:bg-[#f5f5f5] cursor-pointer"
        >
          <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
            <path d="M1 1L11 11M1 11L11 1" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        {/* Header */}
        <div className="px-[24px] pt-[24px] pb-[16px] border-b border-[#ebebeb]">
          <p className="font-['Inter:Light',sans-serif] font-light text-[18px] leading-[28px] text-black">{t('switchModal.toMonthly.title')}</p>
        </div>
        {/* Body */}
        <div className="px-[24px] py-[16px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-[#3d3d3d]">{t('switchModal.toMonthly.body')}</p>
        </div>
        {/* Footer */}
        <div className="flex items-center justify-end gap-[16px] px-[24px] py-[16px]">
          <button
            onClick={onCancel}
            className="h-[40px] min-w-[100px] px-[24px] bg-white border border-[#adadad] rounded-[5px] font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-black cursor-pointer hover:bg-[#f9f9f9]"
          >
            {t('btn.cancel')}
          </button>
          <button
            onClick={onConfirm}
            className="h-[40px] min-w-[100px] px-[24px] bg-black rounded-[5px] font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-white cursor-pointer hover:bg-gray-800"
          >
            {t('btn.switch')}
          </button>
        </div>
      </div>
    </div>
  );
}

function MonthlySuccessModal({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();
  return (
    <div className="fixed inset-0 z-[500] bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] w-[400px] flex flex-col overflow-hidden">
        {/* Icon + Title */}
        <div className="flex flex-col items-center gap-[12px] pt-[32px] px-[24px]">
          <svg width="60" height="60" fill="none" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="28" stroke="black" strokeWidth="1.5"/>
            <path d="M19 30l8 8 14-16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[24px] leading-[36px] text-black text-center">{t('switchModal.scheduledTitle')}</p>
        </div>
        {/* Body */}
        <div className="px-[24px] py-[16px] text-center">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-[#3d3d3d] text-center">{t('switchModal.scheduledBody')}</p>
        </div>
        {/* Button */}
        <div className="px-[24px] pb-[24px]">
          <button
            onClick={onClose}
            className="w-full h-[48px] bg-black rounded-[5px] font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[22px] text-white cursor-pointer hover:bg-gray-800 transition-colors"
          >
            {t('btn.gotIt')}
          </button>
        </div>
      </div>
    </div>
  );
}

function BillingContent({ totalSeats = 2, invitedMembers = [], activeMembers = [], workspaceName = '' }: { totalSeats?: number; invitedMembers?: { email: string; role: 'Member' | 'Admin' }[]; activeMembers?: { email: string; name: string; role: 'Member' | 'Admin' }[]; workspaceName?: string }) {
  const { t, lang } = useLanguage();
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);
  const [showManageDropdown, setShowManageDropdown] = useState(false);
  const [showChangePlan, setShowChangePlan] = useState(false);
  const [showSwitchModal, setShowSwitchModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showAnnualToMonthlyModal, setShowAnnualToMonthlyModal] = useState(false);
  const [showMonthlySuccessModal, setShowMonthlySuccessModal] = useState(false);
  const [switchDirection, setSwitchDirection] = useState<'toMonthly' | 'toAnnual'>('toMonthly');
  const [billingVersion, setBillingVersion] = useState(0); // force re-read localStorage

  // Read from per-workspace namespace, fall back to legacy keys for backwards compatibility
  const planName = localStorage.getItem(`ws:${workspaceName}:planName`) || localStorage.getItem('planName') || 'Team Plan';
  const billing = localStorage.getItem(`ws:${workspaceName}:billing`) || localStorage.getItem('billing') || 'annual';
  const price = localStorage.getItem(`ws:${workspaceName}:price`) || localStorage.getItem('price') || '0';
  const plan = localStorage.getItem(`ws:${workspaceName}:plan`) || localStorage.getItem('plan') || 'team';

  const isAnnual = billing === 'annual';
  const fullPlanName = isAnnual ? t('billing.planNameAnnual') : t('billing.planNameMonthly');

  // 1 (current user) + pre-configured active members + pending invited members
  const seatsUsed = 1 + activeMembers.length + invitedMembers.length;
  const seatsAvailable = Math.max(0, totalSeats - seatsUsed);

  const billingStart = new Date(2026, 2, 1); // March 1, 2026
  const locale = lang === 'ja' ? 'ja-JP' : 'en-US';
  const dateOpts: Intl.DateTimeFormatOptions = lang === 'ja'
    ? { year: 'numeric', month: 'long', day: 'numeric' }
    : { month: 'short', day: 'numeric', year: 'numeric' };
  const startDate = billingStart.toLocaleDateString(locale, dateOpts);
  const nextBilling = new Date(billingStart);
  if (isAnnual) nextBilling.setFullYear(nextBilling.getFullYear() + 1);
  else nextBilling.setMonth(nextBilling.getMonth() + 1);
  const nextBillingDate = nextBilling.toLocaleDateString(locale, dateOpts);

  const JPY_RATE = 150;
  const priceNum = parseFloat(price) || 0;
  const billingAmount = lang === 'ja'
    ? `¥${(priceNum * totalSeats * (isAnnual ? 12 : 1) * JPY_RATE).toLocaleString('ja-JP')}`
    : isAnnual
      ? `$${(priceNum * totalSeats * 12).toFixed(2)}`
      : `$${(priceNum * totalSeats).toFixed(2)}`;
  const perSeatLabel = isAnnual ? t('billing.perSeatTooltipAnnual') : t('billing.perSeatTooltipMonthly');

  if (showChangePlan) {
    return (
      <>
        <div className="content-stretch flex flex-col gap-[32px] items-start ml-[52px] mt-[62px] pb-[56px] w-[872px]">
          {/* Header */}
          <div className="flex flex-col gap-[8px] w-full">
            <button
              onClick={() => setShowChangePlan(false)}
              className="flex items-center gap-[6px] text-[#7a7a7a] hover:text-black cursor-pointer bg-transparent border-none p-0"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px]">{t('billing.back')}</span>
            </button>
            <p className="font-['Inter:Light',sans-serif] font-light text-[24px] leading-[36px] text-black">{t('billing.changePlanTitle')}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#7a7a7a]">{t('billing.changePlanSubtitle')}</p>
          </div>
          {/* Plan cards — Monthly left, Annual right */}
          <div className="flex gap-[24px] w-full">
            {/* Monthly plan card */}
            <div className={`flex flex-col gap-[24px] px-[16px] py-[24px] rounded-[5px] flex-1 bg-white ${!isAnnual ? 'border-2 border-[#8f53ed]' : 'border border-[#ebebeb]'}`}>
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center justify-between">
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[20px] leading-[30px] text-black">{t('billing.planNameMonthly')}</p>
                  {!isAnnual && <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#8f53ed] whitespace-nowrap">{t('billing.currentPlanBadge')}</p>}
                </div>
                <div className="flex flex-col gap-[4px]">
                  <div className="flex items-baseline gap-[4px]">
                    <p className="font-['Inter:Regular',sans-serif] font-normal text-[20px] leading-[30px] text-black">{t('billing.priceMonthly')}</p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#74706d]">{t('billing.perSeatMonth')}</p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#3d3d3d]">{t('billing.billedMonthly')}</p>
                </div>
              </div>
              {!isAnnual ? (
                <button disabled className="w-full h-[32px] bg-[#ebebeb] border border-[#ebebeb] rounded-[5px] font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#a3a3a3] cursor-default">
                  {t('billing.subscribed')}
                </button>
              ) : (
                <button
                  onClick={() => setShowAnnualToMonthlyModal(true)}
                  className="w-full h-[32px] bg-white border border-[#adadad] rounded-[5px] font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-black cursor-pointer hover:bg-[#f9f9f9] transition-colors"
                >
                  {t('billing.switchToMonthly')}
                </button>
              )}
            </div>
            {/* Annual plan card */}
            <div className={`flex flex-col gap-[24px] px-[16px] py-[24px] rounded-[5px] flex-1 bg-white ${isAnnual ? 'border-2 border-[#8f53ed]' : 'border border-[#ebebeb]'}`}>
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center justify-between">
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[20px] leading-[30px] text-black">{t('billing.planNameAnnual')}</p>
                  {isAnnual && <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#8f53ed] whitespace-nowrap">{t('billing.currentPlanBadge')}</p>}
                </div>
                <div className="flex flex-col gap-[4px]">
                  <div className="flex items-baseline gap-[4px]">
                    <p className="font-['Inter:Regular',sans-serif] font-normal text-[20px] leading-[30px] text-black">{t('billing.priceAnnual')}</p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#74706d]">{t('billing.perSeatMonth')}</p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#3d3d3d]">{t('billing.annualSavings')}</p>
                </div>
              </div>
              {isAnnual ? (
                <button disabled className="w-full h-[32px] bg-[#ebebeb] border border-[#ebebeb] rounded-[5px] font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#a3a3a3] cursor-default">
                  {t('billing.subscribed')}
                </button>
              ) : (
                <button
                  onClick={() => { setSwitchDirection('toAnnual'); setShowSwitchModal(true); }}
                  className="w-full h-[32px] bg-black rounded-[5px] font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-white cursor-pointer hover:bg-gray-800 transition-colors"
                >
                  {t('billing.switchToAnnual')}
                </button>
              )}
            </div>
          </div>
        </div>
        {/* Monthly → Annual confirmation modal */}
        {showSwitchModal && (
          <SwitchPlanModal
            direction="toAnnual"
            totalSeats={totalSeats ?? 2}
            onCancel={() => setShowSwitchModal(false)}
            onConfirm={() => {
              localStorage.setItem(`ws:${workspaceName}:billing`, 'annual');
              localStorage.setItem(`ws:${workspaceName}:price`, '20');
              localStorage.setItem(`ws:${workspaceName}:planName`, 'Team Plan');
              setBillingVersion(v => v + 1);
              setShowSwitchModal(false);
              setShowSuccessModal(true);
            }}
          />
        )}
        {/* Success modal after monthly → annual switch */}
        {showSuccessModal && (
          <SwitchSuccessModal
            direction="toAnnual"
            onClose={() => { setShowSuccessModal(false); setShowChangePlan(false); }}
          />
        )}
        {/* Annual → Monthly confirmation modal */}
        {showAnnualToMonthlyModal && (
          <AnnualToMonthlyModal
            onCancel={() => setShowAnnualToMonthlyModal(false)}
            onConfirm={() => {
              setShowAnnualToMonthlyModal(false);
              setShowMonthlySuccessModal(true);
            }}
          />
        )}
        {/* Success modal after annual → monthly switch */}
        {showMonthlySuccessModal && (
          <MonthlySuccessModal
            onClose={() => {
              localStorage.setItem(`ws:${workspaceName}:billing`, 'monthly');
              localStorage.setItem(`ws:${workspaceName}:price`, '25');
              localStorage.setItem(`ws:${workspaceName}:planName`, 'Team Plan');
              setBillingVersion(v => v + 1);
              setShowMonthlySuccessModal(false);
              setShowChangePlan(false);
            }}
          />
        )}
      </>
    );
  }

  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start ml-[52px] mt-[62px] pb-[56px] w-[872px]">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">{t('billing.currentPlan')}</p>
          <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSectionDivider} /></div></div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal items-start min-h-px min-w-px relative whitespace-nowrap">
              <p className="leading-[18px] relative shrink-0 text-[#757575] text-[13px]">{t('billing.plan')}</p>
              <p className="leading-[22px] relative shrink-0 text-black text-[14px]">{fullPlanName}</p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#757575] text-[13px] whitespace-nowrap">{t('billing.amount')}</p>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-black text-[14px] whitespace-nowrap">{billingAmount}</p>
                <div
                  className="overflow-clip relative shrink-0 size-[16px] cursor-pointer"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="7" stroke="#7a7a7a" strokeWidth="1.2" />
                    <path d="M8 7v5M8 5.5v.5" stroke="#7a7a7a" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  {showTooltip && (
                    <div className="absolute bottom-[calc(100%+6px)] left-0 bg-[#3d3d3d] text-white text-[12px] leading-[18px] font-['Inter:Regular',sans-serif] font-normal rounded-[4px] px-[8px] py-[6px] whitespace-nowrap z-50 shadow-lg">
                      {perSeatLabel}
                      <div className="absolute top-full left-[4px] border-4 border-transparent border-t-[#3d3d3d]" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-h-px min-w-px relative">
              <div className="relative">
                <button
                  onClick={() => setShowManageDropdown(d => !d)}
                  className="bg-white border border-[#adadad] rounded-[5px] h-[32px] min-w-[100px] px-[16px] font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#3d3d3d] cursor-pointer hover:bg-[#f9f9f9] flex items-center gap-[8px]"
                >
                  <span>{t('billing.manageSubscription')}</span>
                  <svg
                    className={`shrink-0 transition-transform duration-150 ${showManageDropdown ? 'rotate-180' : ''}`}
                    width="10" height="6" viewBox="0 0 10 6" fill="none"
                  >
                    <path d="M1 1L5 5L9 1" stroke="#3d3d3d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {showManageDropdown && (
                  <>
                    <div className="fixed inset-0 z-[40]" onClick={() => setShowManageDropdown(false)} />
                    <div className="absolute right-0 top-[36px] z-[50] bg-white border border-[#ebebeb] rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] py-[4px] w-[180px]">
                      <div
                        className="flex items-center px-[16px] py-[10px] cursor-pointer hover:bg-[#f5f5f5]"
                        onClick={() => { setShowManageDropdown(false); setShowChangePlan(true); }}
                      >
                        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-black">{t('billing.changePlan')}</p>
                      </div>
                      <div
                        className="flex items-center px-[16px] py-[10px] cursor-pointer hover:bg-[#f5f5f5]"
                        onClick={() => setShowManageDropdown(false)}
                      >
                        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-black">{t('billing.cancelSubscription')}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal items-start min-h-px min-w-px relative whitespace-nowrap">
              <p className="leading-[18px] relative shrink-0 text-[#757575] text-[13px]">{t('billing.startDate')}</p>
              <p className="leading-[22px] relative shrink-0 text-black text-[14px]">{startDate}</p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal items-start min-h-px min-w-px relative whitespace-nowrap">
              <p className="leading-[18px] relative shrink-0 text-[#757575] text-[13px]">{t('billing.nextDate')}</p>
              <p className="leading-[22px] relative shrink-0 text-black text-[14px]">{nextBillingDate}</p>
            </div>
            <div className="flex-[1_0_0]" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">{t('billing.manageSeats')}</p>
        <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSectionDivider} /></div></div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal items-start min-h-px min-w-px relative">
              <p className="leading-[18px] relative shrink-0 text-[#757575] text-[13px] w-[109px]">{t('billing.seatsPurchased')}</p>
              <p className="leading-[22px] relative shrink-0 text-black text-[14px] whitespace-nowrap">{totalSeats}</p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal items-start min-h-px min-w-px relative whitespace-nowrap">
              <p className="leading-[18px] relative shrink-0 text-[#757575] text-[13px]">{t('billing.seatsUsed')}</p>
              <p className="leading-[22px] relative shrink-0 text-black text-[14px]">{seatsUsed}</p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-h-px min-w-px relative">
              <button className="bg-white border border-[#adadad] rounded-[5px] h-[32px] min-w-[100px] px-[16px] font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#3d3d3d] cursor-pointer hover:bg-[#f9f9f9]">
                {t('billing.manageSeats')}
              </button>
            </div>
          </div>
          <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start relative shrink-0 w-full whitespace-nowrap">
            <p className="leading-[18px] relative shrink-0 text-[#757575] text-[13px]">{t('billing.seatsAvailable')}</p>
            <p className="leading-[22px] relative shrink-0 text-black text-[14px]">{seatsAvailable}</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">{t('billing.invoicesSection')}</p>
          <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSectionDivider} /></div></div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal items-start min-h-px min-w-px relative">
              <p className="leading-[22px] relative shrink-0 text-black text-[14px] w-full">{t('billing.invoicesSection')}</p>
              <p className="leading-[18px] relative shrink-0 text-[#757575] text-[13px] w-full">{t('billing.invoicesDesc')}</p>
            </div>
            <button onClick={() => navigate(`/manage-billing?workspaceName=${encodeURIComponent(workspaceName)}`)} className="bg-white border border-[#adadad] rounded-[5px] h-[32px] min-w-[70px] px-[16px] font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#3d3d3d] cursor-pointer hover:bg-[#f9f9f9] ml-[16px] shrink-0 flex items-center gap-[4px]">
              <span>{t('billing.manageBilling')}</span>
              <div className="overflow-clip relative shrink-0 size-[20px]">
                <div className="absolute inset-[28.8%_28.36%_28.18%_28.03%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.723 8.604">
                    <path d="M8.22266 0C8.35526 5.78808e-09 8.4824 0.0527162 8.57617 0.146484C8.66994 0.240253 8.72266 0.367392 8.72266 0.5V6.80859H7.72266V1.70215L0.701172 8.60352L0 7.89062L7.01172 1H1.7627V0H8.22266Z" fill="#3d3d3d" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomVocabularyContent() {
  const { t } = useLanguage();
  const [enabled, setEnabled] = useState(true);
  const [industry, setIndustry] = useState<string | null>(null);
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
  const industries = ['Technology', 'Healthcare', 'Finance', 'Legal', 'Education', 'Marketing', 'Engineering'];
  const [vocabularies, setVocabularies] = useState<{ id: string; term: string }[]>([
    { id: '1', term: 'Desktop' },
    { id: '2', term: 'Deepseek' },
    { id: '3', term: 'Eit' },
    { id: '4', term: 'East' },
    { id: '5', term: 'Eistion' },
    { id: '6', term: 'Fit' },
    { id: '7', term: 'Fast' },
    { id: '8', term: 'Plaud' },
    { id: '9', term: 'Plaud Note' },
    { id: '10', term: 'Plaud NotePin' },
    { id: '11', term: 'Transcription' },
    { id: '12', term: 'Workspace' },
  ]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [showAddInput, setShowAddInput] = useState(false);
  const [newTerm, setNewTerm] = useState('');

  // Group vocabularies alphabetically
  const grouped = vocabularies.reduce<Record<string, typeof vocabularies>>((acc, v) => {
    const letter = v.term.charAt(0).toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(v);
    return acc;
  }, {});
  const sortedLetters = Object.keys(grouped).sort();

  const handleAddTerm = () => {
    const term = newTerm.trim();
    if (!term) return;
    setVocabularies(prev => [...prev, { id: Date.now().toString(), term }]);
    setNewTerm('');
    setShowAddInput(false);
  };

  const handleSaveEdit = (id: string) => {
    const val = editValue.trim();
    if (val) setVocabularies(prev => prev.map(v => v.id === id ? { ...v, term: val } : v));
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    setVocabularies(prev => prev.filter(v => v.id !== id));
  };

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start mx-auto mt-[54px] pb-[56px] w-[872px]">
      {/* Header */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] relative shrink-0 text-[24px] text-black whitespace-nowrap">{t('vocab.title')}</p>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px]">{t('vocab.desc')}</p>
          </div>
          {/* Divider */}
          <div className="h-[1px] bg-[#ebebeb] relative shrink-0 w-full" />
        </div>
        {/* Toggle */}
        <div className="absolute content-stretch flex gap-[12px] items-center right-0 top-[40px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-black text-[14px]">{t('vocab.enable')}</p>
          <button
            onClick={() => setEnabled(e => !e)}
            className={`relative h-[20px] w-[36px] rounded-[5px] transition-colors shrink-0 ${enabled ? 'bg-black' : 'bg-[#a3a3a3]'}`}
          >
            <div className={`absolute top-1/2 -translate-y-1/2 bg-white rounded-[3px] size-[16px] transition-all ${enabled ? 'right-[2px]' : 'left-[2px]'}`} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        {/* Industry */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-black text-[14px]">{t('vocab.industry')}</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] w-[616px]">{t('vocab.industryDesc')}</p>
            </div>
            <div className="relative">
              <button
                onClick={() => setShowIndustryDropdown(d => !d)}
                className="content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[70px] overflow-clip p-[8px] relative rounded-[5px] shrink-0 hover:bg-[#f5f5f5] cursor-pointer"
              >
                <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[#7a7a7a] text-[14px] text-center whitespace-nowrap">{industry || t('vocab.noSelect')}</p>
                <svg className="shrink-0 size-[16px]" fill="none" viewBox="0 0 16 16"><path d="M4 6l4 4 4-4" stroke="#7a7a7a" strokeWidth="1.5" strokeLinejoin="round" /></svg>
              </button>
              {showIndustryDropdown && (
                <div className="absolute right-0 top-[36px] z-50 bg-white border border-[#ebebeb] rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] py-[8px] w-[200px]">
                  <div
                    className="flex items-center px-[16px] py-[8px] cursor-pointer hover:bg-[#f5f5f5]"
                    onClick={() => { setIndustry(null); setShowIndustryDropdown(false); }}
                  >
                    <div className="size-[20px] flex items-center justify-center shrink-0">
                      {industry === null && <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 4l3 3 7-7" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </div>
                    <p className="ml-[8px] font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-[#3d3d3d]">{t('vocab.noSelect')}</p>
                  </div>
                  {industries.map(ind => (
                    <div
                      key={ind}
                      className="flex items-center px-[16px] py-[8px] cursor-pointer hover:bg-[#f5f5f5]"
                      onClick={() => { setIndustry(ind); setShowIndustryDropdown(false); }}
                    >
                      <div className="size-[20px] flex items-center justify-center shrink-0">
                        {industry === ind && <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 4l3 3 7-7" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      </div>
                      <p className="ml-[8px] font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-[#3d3d3d]">{ind}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Vocabulary list */}
        <div className="content-stretch flex flex-col h-[476px] items-start py-[8px] relative shrink-0 w-full">
          {/* Vocabulary header */}
          <div className="content-stretch flex items-center justify-between pb-[8px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-black text-[14px]">{t('vocab.count', { count: vocabularies.length })}</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] w-[616px]">{t('vocab.listDesc')}</p>
            </div>
            <button
              onClick={() => setShowAddInput(true)}
              className="bg-black content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[70px] overflow-clip px-[16px] py-[8px] relative rounded-[5px] shrink-0 hover:bg-gray-800 cursor-pointer"
            >
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-white text-[12px] text-center whitespace-nowrap">{t('vocab.add')}</p>
            </button>
          </div>

          {/* Add term input */}
          {showAddInput && (
            <div className="content-stretch flex gap-[8px] items-center pb-[8px] relative shrink-0 w-full">
              <input
                autoFocus
                className="flex-1 border border-black rounded-[5px] h-[32px] px-[8px] font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-black outline-none"
                placeholder={t('vocab.enterTerm')}
                value={newTerm}
                onChange={e => setNewTerm(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') handleAddTerm(); else if (e.key === 'Escape') { setShowAddInput(false); setNewTerm(''); } }}
              />
              <button onClick={handleAddTerm} className="bg-black text-white text-[12px] font-['Inter:Regular',sans-serif] font-normal h-[32px] px-[12px] rounded-[5px] hover:bg-gray-800 cursor-pointer whitespace-nowrap">{t('vocab.save')}</button>
              <button onClick={() => { setShowAddInput(false); setNewTerm(''); }} className="text-[#7a7a7a] text-[12px] font-['Inter:Regular',sans-serif] font-normal h-[32px] px-[8px] rounded-[5px] hover:bg-[#f5f5f5] cursor-pointer whitespace-nowrap">{t('vocab.cancel')}</button>
            </div>
          )}

          {/* Grouped list */}
          <div className="bg-[#f9f9f9] content-stretch flex flex-col gap-[16px] items-start overflow-y-auto pl-[8px] pr-[16px] py-[8px] relative rounded-[5px] shrink-0 w-full flex-1">
            {sortedLetters.map(letter => (
              <div key={letter} className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                {/* Letter header */}
                <div className="content-stretch flex h-[38px] items-center overflow-clip px-[8px] py-[5px] relative shrink-0 w-full">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#a3a3a3] text-[14px] whitespace-nowrap">{letter}</p>
                </div>
                {/* Terms under this letter */}
                {grouped[letter].map(v => (
                  <div key={v.id} className="content-stretch flex h-[38px] items-center justify-between px-[8px] relative rounded-[5px] shrink-0 w-full hover:bg-white group">
                    {editingId === v.id ? (
                      <input
                        autoFocus
                        className="flex-1 border border-black rounded-[5px] h-[32px] px-[8px] font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-black outline-none max-w-[560px] min-w-[360px]"
                        value={editValue}
                        onChange={e => setEditValue(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter') handleSaveEdit(v.id); else if (e.key === 'Escape') setEditingId(null); }}
                        onBlur={() => handleSaveEdit(v.id)}
                      />
                    ) : (
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-black text-[14px] overflow-hidden text-ellipsis whitespace-nowrap max-w-[560px] min-w-[360px]">{v.term}</p>
                    )}
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      {/* Rename icon */}
                      <button
                        onClick={() => { setEditingId(v.id); setEditValue(v.term); }}
                        className="relative shrink-0 size-[20px] flex items-center justify-center hover:opacity-70"
                      >
                        <svg className="size-full" fill="none" viewBox="0 0 20 20">
                          <path d="M13.5 3.5L16.5 6.5L7 16H4V13L13.5 3.5Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M11.5 5.5L14.5 8.5" stroke="black" strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>
                      </button>
                      {/* Delete icon */}
                      <button
                        onClick={() => handleDelete(v.id)}
                        className="overflow-clip relative shrink-0 size-[20px] flex items-center justify-center hover:opacity-70"
                      >
                        <svg className="size-full" fill="none" viewBox="0 0 20 20">
                          <path d="M5 7h10M8 7V5h4v2M9 10v5M11 10v5M6 7l.8 9h6.4L14 7H6z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PreferencesContent() {
  const { t } = useLanguage();
  const [transcriptionLang, setTranscriptionLang] = useState('English');
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean', 'Portuguese'];

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start ml-[52px] mt-[62px] pb-[56px] w-[872px]">
      {/* Transcription section */}
      <div className="flex flex-col gap-[16px] w-full">
        <p className="font-['Inter:Light',sans-serif] font-light text-[24px] leading-[36px] text-black">{t('prefs.transcriptionSection')}</p>
        <div className="h-[1px] bg-[#ebebeb] w-full" />
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-[4px]">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-black">{t('prefs.transcriptionLang')}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#a3a3a3]">{t('prefs.transcriptionDesc')}</p>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowLangDropdown(d => !d)}
              className="flex items-center gap-[8px] h-[32px] px-[12px] border border-[#adadad] rounded-[5px] bg-white hover:bg-[#f9f9f9] cursor-pointer"
            >
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-[#3d3d3d]">{transcriptionLang}</p>
              <svg className="shrink-0 size-[14px]" fill="none" viewBox="0 0 16 16">
                <path d="M4 6l4 4 4-4" stroke="#7a7a7a" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </button>
            {showLangDropdown && (
              <>
                <div className="fixed inset-0 z-[40]" onClick={() => setShowLangDropdown(false)} />
                <div className="absolute right-0 top-[36px] z-[50] bg-white border border-[#ebebeb] rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] py-[8px] w-[200px]">
                  {languages.map(lang => (
                    <div
                      key={lang}
                      className={`flex items-center px-[16px] py-[8px] cursor-pointer hover:bg-[#f5f5f5] ${lang === transcriptionLang ? 'bg-[#f5f5f5]' : ''}`}
                      onClick={() => { setTranscriptionLang(lang); setShowLangDropdown(false); }}
                    >
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-black">{lang}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-[4px]">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-black">{t('prefs.speakerLabel')}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#a3a3a3]">{t('prefs.speakerDesc')}</p>
          </div>
          <DisabledToggleWithTooltip />
        </div>
      </div>
      {/* Data & privacy section */}
      <div className="flex flex-col gap-[16px] w-full">
        <p className="font-['Inter:Light',sans-serif] font-light text-[24px] leading-[36px] text-black">{t('prefs.dataSection')}</p>
        <div className="h-[1px] bg-[#ebebeb] w-full" />
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-[4px]">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-black">{t('prefs.helpImprove')}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#a3a3a3]">
              {t('prefs.helpDesc')}{' '}
              <span className="underline cursor-pointer">{t('prefs.learnMore')}</span>
            </p>
          </div>
          <DisabledToggleWithTooltip />
        </div>
      </div>
    </div>
  );
}

function DisabledToggleWithTooltip() {
  const { t } = useLanguage();
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (wrapperRef.current) {
      const r = wrapperRef.current.getBoundingClientRect();
      setPos({ x: r.left + r.width / 2, y: r.top });
    }
    setShow(true);
  };

  return (
    <div
      ref={wrapperRef}
      className="relative shrink-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setShow(false)}
    >
      <button
        disabled
        className="relative h-[20px] w-[36px] rounded-[5px] shrink-0 bg-[#d6d6d6] cursor-default pointer-events-none"
      >
        <div className="absolute top-1/2 -translate-y-1/2 bg-white rounded-[3px] size-[16px] left-[2px]" />
      </button>
      {show && createPortal(
        <div
          className="fixed z-[9999] pointer-events-none"
          style={{ left: pos.x, top: pos.y, transform: 'translate(-50%, calc(-100% - 8px))' }}
        >
          <div
            className="px-[8px] py-[8px] rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] whitespace-nowrap"
            style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(40px)' }}
          >
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-white text-center">{t('security.disabledTooltip')}</p>
          </div>
          <div className="flex justify-center">
            <div className="w-[8px] h-[8px] rotate-45 -mt-[4px]" style={{ background: 'rgba(0,0,0,0.6)' }} />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

function SecurityContent() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start ml-[52px] mt-[62px] pb-[56px] w-[872px]">
      {/* Sharing & permissions section */}
      <div className="flex flex-col gap-[16px] w-full">
        <p className="font-['Inter:Light',sans-serif] font-light text-[24px] leading-[36px] text-black">{t('security.sharingSection')}</p>
        <div className="h-[1px] bg-[#ebebeb] w-full" />
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-[4px]">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-black">{t('security.externalSharing')}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#a3a3a3]">{t('security.externalDesc')}</p>
          </div>
          <DisabledToggleWithTooltip />
        </div>
      </div>
      {/* Data & privacy section */}
      <div className="flex flex-col gap-[16px] w-full">
        <p className="font-['Inter:Light',sans-serif] font-light text-[24px] leading-[36px] text-black">{t('security.dataSection')}</p>
        <div className="h-[1px] bg-[#ebebeb] w-full" />
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-[4px]">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-black">{t('security.helpImprove')}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#a3a3a3]">
              {t('security.helpDesc')}{' '}
              <span className="underline cursor-pointer">{t('security.learnMore')}</span>
            </p>
          </div>
          <DisabledToggleWithTooltip />
        </div>
      </div>
    </div>
  );
}

function Frame8({ onClose, activeTab, displayName, avatarLetter, onEditNameClick, onInviteMembersClick, pendingInvites, invitedMembers, activeMembers, workspaceName, totalSeats, removedEmails, onRemoveEmail }: { onClose?: () => void; activeTab: string; displayName: string; avatarLetter: string; onEditNameClick: () => void; onInviteMembersClick?: () => void; pendingInvites?: number; invitedMembers?: { email: string; role: 'Member' | 'Admin' }[]; activeMembers?: { email: string; name: string; role: 'Member' | 'Admin' }[]; workspaceName?: string; totalSeats?: number; removedEmails: Set<string>; onRemoveEmail: (email: string) => void }) {
  const { lang } = useLanguage();
  const displayNameLocalized = lang === 'ja' && displayName === 'Demo Account' ? 'デモアカウント' : displayName;
  return (
    <div className="absolute bottom-0 left-[219px] right-0 top-0">
      <div className="absolute right-[44px] top-[24px] z-10 overflow-clip size-[20px] cursor-pointer hover:opacity-70" data-name="icon_xmark_for_nav" onClick={onClose}>
        <div className="absolute inset-[20.58%_20.57%_20.57%_20.58%]" data-name="Vector">
          <div className="absolute inset-[-3%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4778 12.4778">
              <path d={svgPaths.p39d065e0} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="h-full overflow-y-auto">
        {activeTab === 'account' ? <Frame31 /> : activeTab === 'members' ? <MembersRolesContent onInviteMembersClick={onInviteMembersClick} pendingInvites={pendingInvites} invitedMembers={invitedMembers} activeMembers={activeMembers} workspaceName={workspaceName} removedEmails={removedEmails} onRemoveEmail={onRemoveEmail} /> : activeTab === 'general' ? <GeneralContent workspaceName={workspaceName} /> : activeTab === 'billing' ? <BillingContent totalSeats={totalSeats} invitedMembers={invitedMembers} activeMembers={activeMembers} workspaceName={workspaceName} /> : activeTab === 'devices' ? <DevicesContent activeMembers={activeMembers} removedEmails={removedEmails} /> : activeTab === 'custom_vocabulary' ? <CustomVocabularyContent /> : activeTab === 'preferences' ? <PreferencesContent /> : activeTab === 'security' ? <SecurityContent /> : <PersonalizationContent displayName={displayNameLocalized} avatarLetter={displayNameLocalized.charAt(0).toUpperCase()} onEditNameClick={onEditNameClick} />}
      </div>
    </div>
  );
}

export default function Frame76({ onClose, onDisplayNameChange, onInviteMembers, pendingInvites, invitedMembers, activeMembers, workspaceName, totalSeats, initialTab }: { onClose?: () => void; onDisplayNameChange?: (name: string) => void; onInviteMembers?: () => void; pendingInvites?: number; invitedMembers?: { email: string; role: 'Member' | 'Admin' }[]; activeMembers?: { email: string; name: string; role: 'Member' | 'Admin' }[]; workspaceName?: string; totalSeats?: number; initialTab?: string }) {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState(initialTab ?? 'account');
  const [displayName, setDisplayName] = useState('Demo Account');
  const displayNameLocalized = lang === 'ja' && displayName === 'Demo Account' ? 'デモアカウント' : displayName;
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState('');
  const [removedEmails, setRemovedEmails] = useState<Set<string>>(new Set());

  const avatarLetter = displayName.charAt(0).toUpperCase();

  const handleEditNameClick = () => {
    setEditValue(displayName);
    setIsEditing(true);
  };

  const handleSave = () => {
    const trimmed = editValue.trim();
    if (trimmed) {
      setDisplayName(trimmed);
      if (onDisplayNameChange) onDisplayNameChange(trimmed);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditValue('');
  };

  return (
    <div className="bg-white border border-[#ebebeb] border-solid overflow-hidden relative rounded-[5px] size-full">
      <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Frame8 onClose={onClose} activeTab={activeTab} displayName={displayName} avatarLetter={avatarLetter} onEditNameClick={handleEditNameClick} onInviteMembersClick={onInviteMembers} pendingInvites={pendingInvites} invitedMembers={invitedMembers} activeMembers={activeMembers} workspaceName={workspaceName} totalSeats={totalSeats} removedEmails={removedEmails} onRemoveEmail={(email) => setRemovedEmails(prev => new Set([...prev, email]))} />
      {isEditing && (
        <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black/40" onClick={handleCancel}>
          <div onClick={(e) => e.stopPropagation()}>
            <EditNameModal editValue={editValue} onChange={setEditValue} onSave={handleSave} onCancel={handleCancel} />
          </div>
        </div>
      )}
    </div>
  );
}