import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";

const ParentDashboard = () => {
  const progressData = [
    { name: "Alice", progress: 75 },
    { name: "Bob", progress: 50 },
    { name: "Charlie", progress: 90 },
  ];

  const settings = [
    { name: "Enable Notifications", enabled: true },
    { name: "Dark Mode", enabled: false },
    { name: "Auto-Save Projects", enabled: true },
  ];

  return (
    <main className="w-full min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Card className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <CardHeader>
            <CardTitle>Parent Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="progress">
              <TabsList>
                <TabsTrigger value="progress">Progress</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="progress">
                <Table className="mt-4">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Progress</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {progressData.map((student) => (
                      <TableRow key={student.name}>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={student.progress} className="w-full" />
                            <span className="text-sm font-medium">{student.progress}%</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="settings">
                <div className="space-y-4 mt-4">
                  {settings.map((setting) => (
                    <div key={setting.name} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{setting.name}</span>
                      <Switch checked={setting.enabled} />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default ParentDashboard;
