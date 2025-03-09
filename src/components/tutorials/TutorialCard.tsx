import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface TutorialCardProps {
  title: string;
  description: string;
  progress: number;
  onStart: () => void;
}

const TutorialCard: React.FC<TutorialCardProps> = ({
  title,
  description,
  progress,
  onStart,
}) => {
  return (
    <Card className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="mb-4">
            <Progress value={progress} />
            <p className="text-xs text-muted-foreground mt-2">
              {progress}% completed
            </p>
          </div>
          <Button
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg w-full"
            onClick={onStart}
          >
            Start Tutorial
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default TutorialCard;
