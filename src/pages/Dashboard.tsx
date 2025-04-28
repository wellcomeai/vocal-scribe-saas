
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Copy, Settings, Speaker, Users } from "lucide-react";
import { toast } from "sonner";

const Dashboard = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Code copied to clipboard!");
  };

  const demoCode = `<script src="https://voicescribe.com/widget.js?agentId=12345"></script>`;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <div className="container py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Minutes Used</CardTitle>
              <Speaker className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45 / 100</div>
              <p className="text-xs text-muted-foreground">Minutes this month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Conversations</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active AI Assistants</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1 / 1</div>
              <p className="text-xs text-muted-foreground">On Free Plan</p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="integration">
          <TabsList className="mb-6">
            <TabsTrigger value="integration">Integration</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="api-keys">API Keys</TabsTrigger>
            <TabsTrigger value="logs">Conversation Logs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="integration">
            <Card>
              <CardHeader>
                <CardTitle>Website Integration</CardTitle>
                <CardDescription>
                  Copy and paste this code snippet into your website's HTML to add your voice AI assistant.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-md relative mb-4 overflow-x-auto">
                  <code className="text-sm font-mono">{demoCode}</code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8 text-gray-400 hover:text-white"
                    onClick={() => copyToClipboard(demoCode)}
                  >
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy code</span>
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Customize Appearance</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      You can customize how the widget looks on your website.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Button Position</label>
                        <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                          <option value="bottom-right">Bottom Right</option>
                          <option value="bottom-left">Bottom Left</option>
                          <option value="top-right">Top Right</option>
                          <option value="top-left">Top Left</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Button Color</label>
                        <Input type="color" value="#6C63FF" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Advanced Options</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Additional parameters you can add to the script tag.
                    </p>
                    
                    <table className="w-full text-sm">
                      <thead>
                        <tr>
                          <th className="text-left pb-2">Parameter</th>
                          <th className="text-left pb-2">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 pr-4 font-mono">title="Your Title"</td>
                          <td>Custom title for the chat window</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 font-mono">welcomeMessage="Hello!"</td>
                          <td>Custom welcome message</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 font-mono">hideOnMobile="true"</td>
                          <td>Hide the widget on mobile devices</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>AI Assistant Settings</CardTitle>
                <CardDescription>
                  Configure the behavior of your AI voice assistant.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Assistant Name</label>
                  <Input placeholder="AI Assistant" defaultValue="VoiceScribe Assistant" />
                  <p className="text-xs text-gray-600">This name will be used when the assistant introduces itself.</p>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Behavior Prompt</label>
                  <Textarea 
                    placeholder="Instructions for your AI assistant"
                    className="min-h-[100px]"
                    defaultValue="You are a friendly and helpful customer service representative for our website. Answer questions about our products and services concisely and professionally."
                  />
                  <p className="text-xs text-gray-600">These instructions define how the AI should behave and respond.</p>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Voice Selection</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                    <option value="alloy">Alloy (Balanced)</option>
                    <option value="echo">Echo (Male)</option>
                    <option value="fable">Fable (Male)</option>
                    <option value="onyx">Onyx (Male)</option>
                    <option value="nova">Nova (Female)</option>
                    <option value="shimmer">Shimmer (Female)</option>
                  </select>
                  <p className="text-xs text-gray-600">Select the voice for your AI assistant.</p>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Google Sheets Integration</label>
                  <Input placeholder="Google Sheets URL" />
                  <p className="text-xs text-gray-600">
                    Enter the URL of your Google Sheets document to save conversation logs.
                    <a href="#" className="text-brand-purple ml-1">Learn how to set up Google Sheets</a>
                  </p>
                </div>
                
                <Button>Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="api-keys">
            <Card>
              <CardHeader>
                <CardTitle>API Keys</CardTitle>
                <CardDescription>
                  Manage your OpenAI API key for voice processing.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your OpenAI API Key</label>
                  <div className="flex gap-2">
                    <Input type="password" placeholder="sk-..." />
                    <Button variant="outline">Save</Button>
                  </div>
                  <p className="text-xs text-gray-600">
                    Your API key is encrypted and securely stored. We never share your key with third parties.
                  </p>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-md">
                  <h3 className="text-sm font-medium text-yellow-800 mb-2">Important Information</h3>
                  <p className="text-xs text-yellow-700">
                    You will be billed directly by OpenAI for usage through your API key. VoiceScribe does not mark up or 
                    resell OpenAI services. This approach gives you complete control and transparency over your costs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="logs">
            <Card>
              <CardHeader>
                <CardTitle>Conversation Logs</CardTitle>
                <CardDescription>
                  View recent conversations with your AI assistant.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <Code className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <h3 className="text-lg font-medium mb-1">No conversation logs yet</h3>
                  <p className="text-sm">
                    Conversation logs will appear here once your AI assistant is integrated and used on your website.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
