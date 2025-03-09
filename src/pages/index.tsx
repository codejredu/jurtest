// Update this page (the content is just a fallback if you fail to update the page). Always include w-full and min-h-screen classes in the main element.
const Index = () => {
  return (
    <main className="w-full min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-primary mb-4">
            Welcome to Kids Coding App!
          </h1>
          <p className="text-lg text-muted-foreground">
            Learn coding through fun and interactive activities.
          </p>
        </section>
        <section className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Coding Blocks</h2>
            <p className="text-muted-foreground mb-4">
              Drag and drop coding blocks to create your own programs.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg">
              Explore Blocks
            </button>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Character Selection</h2>
            <p className="text-muted-foreground mb-4">
              Choose and customize your favorite characters.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg">
              Select Characters
            </button>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Tutorials</h2>
            <p className="text-muted-foreground mb-4">
              Follow step-by-step tutorials to learn coding basics.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg">
              Start Tutorials
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Index;