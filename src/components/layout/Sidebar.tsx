import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  LineChart, 
  AlertTriangle, 
  Settings, 
  Zap, 
  Download,
  Calculator
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <SidebarComponent>
      <SidebarHeader>
        <div className="flex items-center px-6 py-4">
          <Zap className="h-6 w-6 text-solar-500 mr-2" />
          <span className="text-lg font-bold text-sidebar-foreground">PV Monitor</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="scrollbar-thin">
        <SidebarGroup>
          <SidebarGroupLabel>Surveillance</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/dashboard" className={`flex items-center ${location.pathname === '/dashboard' ? 'text-primary font-medium' : ''}`}>
                    <LayoutDashboard className="h-5 w-5 mr-3" />
                    <span>Tableau de Bord</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/iv-analytics" className={`flex items-center ${location.pathname === '/iv-analytics' ? 'text-primary font-medium' : ''}`}>
                    <LineChart className="h-5 w-5 mr-3" />
                    <span>Analyses I-V</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/" className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-3" />
                    <span>Surveillance des Défauts</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Outils</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/roi-calculator" className={`flex items-center ${location.pathname === '/roi-calculator' ? 'text-primary font-medium' : ''}`}>
                    <Calculator className="h-5 w-5 mr-3" />
                    <span>Calculateur ROI</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Configuration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/settings" className={`flex items-center ${location.pathname === '/settings' ? 'text-primary font-medium' : ''}`}>
                    <Settings className="h-5 w-5 mr-3" />
                    <span>Paramètres</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/" className="flex items-center">
                    <Download className="h-5 w-5 mr-3" />
                    <span>Export des Données</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="px-6 py-4 text-sm text-muted-foreground">
          © 2024 PV Monitor - Tous droits réservés
        </div>
      </SidebarFooter>
    </SidebarComponent>
  );
};

export default Sidebar;
