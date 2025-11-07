import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const WaitlistForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    instrument: "",
    genres: "",
    experienceLevel: "",
    practiceStruggles: "",
    consistencyIssues: "",
    enjoyment: "",
    learningStyle: "",
    betaTesting: false,
    name: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to VIVA! 🎵",
      description: "You've been added to our waitlist. We'll be in touch soon!",
    });
    // Reset form
    setFormData({
      instrument: "",
      genres: "",
      experienceLevel: "",
      practiceStruggles: "",
      consistencyIssues: "",
      enjoyment: "",
      learningStyle: "",
      betaTesting: false,
      name: "",
      email: ""
    });
  };

  return (
    <section id="waitlist" className="py-24 px-6">
      <div className="max-w-3xl mx-auto animate-fade-in">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-hot-pink via-magenta to-electric-indigo bg-clip-text text-transparent">
          Join the Waitlist
        </h2>
        
        <p className="text-xl text-center text-muted-foreground mb-12">
          Help us build VIVA around your needs. Tell us about your musical journey.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8 bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
          <div className="space-y-2">
            <Label htmlFor="instrument" className="text-lg">Instrument or Voice Type *</Label>
            <Input
              id="instrument"
              placeholder="What do you want to learn or improve?"
              value={formData.instrument}
              onChange={(e) => setFormData({ ...formData, instrument: e.target.value })}
              required
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="genres" className="text-lg">Genres *</Label>
            <Input
              id="genres"
              placeholder="What genres of music excite you most?"
              value={formData.genres}
              onChange={(e) => setFormData({ ...formData, genres: e.target.value })}
              required
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience" className="text-lg">Experience Level *</Label>
            <Select value={formData.experienceLevel} onValueChange={(value) => setFormData({ ...formData, experienceLevel: value })} required>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Select your level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="struggles" className="text-lg">Practice Struggles *</Label>
            <Textarea
              id="struggles"
              placeholder="What do you struggle with most when practising — timing, motivation, technique, something else?"
              value={formData.practiceStruggles}
              onChange={(e) => setFormData({ ...formData, practiceStruggles: e.target.value })}
              required
              className="bg-background/50 min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="consistency" className="text-lg">Consistency *</Label>
            <Textarea
              id="consistency"
              placeholder="What keeps you from staying consistent?"
              value={formData.consistencyIssues}
              onChange={(e) => setFormData({ ...formData, consistencyIssues: e.target.value })}
              required
              className="bg-background/50 min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="enjoyment" className="text-lg">Enjoyment (Optional)</Label>
            <Textarea
              id="enjoyment"
              placeholder="What would make practice more enjoyable for you?"
              value={formData.enjoyment}
              onChange={(e) => setFormData({ ...formData, enjoyment: e.target.value })}
              className="bg-background/50 min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="learning" className="text-lg">Learning Style *</Label>
            <Textarea
              id="learning"
              placeholder="How do you learn best? What worked or didn't work with past music teachers?"
              value={formData.learningStyle}
              onChange={(e) => setFormData({ ...formData, learningStyle: e.target.value })}
              required
              className="bg-background/50 min-h-[100px]"
            />
          </div>

          <div className="flex items-start space-x-3 bg-background/30 p-4 rounded-lg">
            <Checkbox
              id="beta"
              checked={formData.betaTesting}
              onCheckedChange={(checked) => setFormData({ ...formData, betaTesting: checked as boolean })}
            />
            <Label htmlFor="beta" className="text-base cursor-pointer leading-relaxed">
              I'd like to help shape VIVA by joining early beta testing
            </Label>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-lg">Name *</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background/50"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            size="lg"
            className="w-full bg-gradient-to-r from-hot-pink via-magenta to-vivid-violet hover:opacity-90 text-white font-semibold py-6 text-lg rounded-full shadow-lg shadow-hot-pink/25 transition-all hover:shadow-xl hover:shadow-hot-pink/40"
          >
            👉 Join VIVA and Become the Musician You've Always Wanted to Become
          </Button>
        </form>
      </div>
    </section>
  );
};

export default WaitlistForm;
