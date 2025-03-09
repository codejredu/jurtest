import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Character {
  id: string;
  name: string;
  image: string;
}

interface CharacterSelectorProps {
  characters: Character[];
  onSelect: (character: Character) => void;
}

const CharacterSelector: React.FC<CharacterSelectorProps> = ({ characters, onSelect }) => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character);
    onSelect(character);
  };

  return (
    <main className="w-full min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Card className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <CardHeader>
            <CardTitle>Select Your Character</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {characters.map((character) => (
                <div
                  key={character.id}
                  className={cn(
                    "cursor-pointer rounded-lg border border-border p-4 text-center shadow-sm hover:shadow-md transition-shadow",
                    selectedCharacter?.id === character.id && "border-primary"
                  )}
                  onClick={() => handleCharacterClick(character)}
                >
                  <Avatar className="mx-auto mb-2 h-16 w-16">
                    <AvatarImage src={character.image} alt={character.name} />
                    <AvatarFallback>{character.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-medium">{character.name}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <Button
                variant="default"
                onClick={() => setIsDialogOpen(true)}
                disabled={!selectedCharacter}
              >
                Customize Character
              </Button>
            </div>
          </CardContent>
        </Card>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Customize {selectedCharacter?.name}</DialogTitle>
            </DialogHeader>
            <div className="p-4">
              <p className="text-sm text-muted-foreground">
                Character customization options will be available here.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
};

export default CharacterSelector;