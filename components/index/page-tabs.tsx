import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function HomeTabs() {
  return (
    <Tabs defaultValue="overview" className="w-[600px] flex-row">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="profits">Profits</TabsTrigger>
        <TabsTrigger value="credit">Credit</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              View your key metrics and recent project activity within a Secure Platform. Track progression
              across all your active projects and Revenue.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            You can have 12 active companies and 3 pending patents.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="profits">
        <Card>
          <CardHeader>
            <CardTitle>Profits</CardTitle>
            <CardDescription>
              Track performance and user engagement metrics. Monitor trends and
              identify growth opportunities with Probe.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Monitor your profit margins and revenue streams across all active projects.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="credit">
        <Card>
          <CardHeader>
            <CardTitle>Credit</CardTitle>
            <CardDescription>
              Manage your credit limit and payment history. View your outstanding balances and make payments.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            We offer a credit limit of up to $100,000 based on your account history and performance. Your current credit limit is $50,000.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>
              Manage your account preferences and options. Customize your
              experience to fit your needs.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Configure notifications, security, and themes.
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
