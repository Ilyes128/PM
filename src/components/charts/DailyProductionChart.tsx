import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { usePvPanel } from '@/context/PvPanelContext';

// Fonction pour générer des données de test pour la journée
const generateDailyData = () => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  return hours.map(hour => {
    // Simulation d'une courbe de production typique
    const baseProduction = 1000; // W
    const peakHour = 12; // Heure de pointe
    const production = baseProduction * Math.exp(-Math.pow((hour - peakHour) / 4, 2));
    
    return {
      heure: `${hour}h`,
      production: Math.round(production)
    };
  });
};

const DailyProductionChart: React.FC = () => {
  const data = generateDailyData();

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Production Journalière</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="heure" 
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              label={{ 
                value: 'Puissance (W)', 
                angle: -90, 
                position: 'insideLeft',
                style: { textAnchor: 'middle' }
              }}
            />
            <Tooltip 
              formatter={(value: number) => [`${value} W`, 'Production']}
              labelFormatter={(label) => `Heure : ${label}`}
            />
            <Area
              type="monotone"
              dataKey="production"
              stroke="#f59e0b"
              fill="#fef3c7"
              fillOpacity={0.8}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default DailyProductionChart; 