import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Sun, 
  LineChart, 
  Shield, 
  Clock, 
  DollarSign,
  Leaf,
  BarChart3,
  Calculator
} from 'lucide-react';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Optimisez Votre Production Solaire
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Maximisez votre rendement photovoltaïque et réduisez vos coûts énergétiques avec notre système de monitoring intelligent.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/dashboard">Commencer</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="#benefits">En savoir plus</Link>
          </Button>
        </div>
      </div>

      {/* ROI Simulation Section */}
      <div className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 justify-center mb-8">
              <Calculator className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-center">
                Simulation du Retour sur Investissement
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-primary" />
                    Investissement Initial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">4 000 TND</p>
                  <p className="text-muted-foreground mt-2">Coût du système de monitoring</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-primary" />
                    Économie Annuelle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">1 500 TND</p>
                  <p className="text-muted-foreground mt-2">Grâce à l'optimisation de votre production</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-6 w-6 text-primary" />
                    Retour sur Investissement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">2.6 ans</p>
                  <p className="text-muted-foreground mt-2">Temps estimé pour amortir votre investissement</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="h-6 w-6 text-primary" />
                    Économie sur 20 ans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">26 000 TND</p>
                  <p className="text-muted-foreground mt-2">Durée de vie moyenne du système</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Ce que vous allez gagner
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-primary" />
                <CardTitle>Économies Financières</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Réduisez jusqu'à 30% votre facture d'électricité grâce à une meilleure gestion de votre production solaire.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-primary" />
                <CardTitle>Rendement Optimisé</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Augmentez votre production jusqu'à 25% avec notre système de monitoring et d'optimisation en temps réel.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-primary" />
                <CardTitle>Impact Écologique</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Contribuez activement à la réduction des émissions de CO₂ et à la préservation de l'environnement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <CardTitle>Surveillance Intelligente</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Détection précoce des anomalies et maintenance prédictive pour éviter les pannes coûteuses.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                <CardTitle>Retour sur Investissement</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Amortissement rapide de votre investissement grâce à une production optimisée et des économies accrues.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <LineChart className="h-6 w-6 text-primary" />
                <CardTitle>Données Précises</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Accédez à des analyses détaillées et des rapports personnalisés pour prendre les meilleures décisions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à optimiser votre production solaire ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rejoignez-nous dès aujourd'hui et commencez à maximiser votre rendement énergétique.
          </p>
          <Button asChild size="lg">
            <Link to="/dashboard">Commencer Maintenant</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing; 