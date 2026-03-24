import NavigationSidebar from "../../imports/NavigationSidebar";
import SidebarContainerIndividual from "../../imports/SidebarContainer-23-11355";
import SidebarContainerTeams from "../../imports/SidebarContainer-23-11539";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";

export default function PlanSelection() {
  const [searchParams] = useSearchParams();
  const [isTeamsView, setIsTeamsView] = useState(searchParams.get('view') === 'teams');
  const billingCycle = searchParams.get('billing') || 'annual';

  useEffect(() => {
    if (searchParams.get('view') === 'teams') {
      setIsTeamsView(true);
    }
  }, [searchParams]);

  return (
    <div className="bg-white min-h-screen relative w-full">
      {/* Navigation Sidebar */}
      <div className="fixed bg-[#f5f5f5] h-screen left-0 overflow-visible top-0 w-[220px] z-[100]">
        <NavigationSidebar currentPage="membership-center" />
      </div>
      
      {/* Main Content Area - Centered */}
      <div className="ml-[220px] flex justify-center items-start min-h-screen bg-white">
        <div className="w-full max-w-[1220px] relative py-8">
          {isTeamsView ? (
            <SidebarContainerTeams onToggle={() => setIsTeamsView(false)} billingCycle={billingCycle} />
          ) : (
            <SidebarContainerIndividual onToggle={() => setIsTeamsView(true)} billingCycle={billingCycle} />
          )}
        </div>
      </div>
    </div>
  );
}