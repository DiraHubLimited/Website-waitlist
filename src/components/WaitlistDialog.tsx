import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultTab?: "driver" | "passenger";
}

const WaitlistDialog = ({ open, onOpenChange, defaultTab = "driver" }: WaitlistDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [driverCity, setDriverCity] = useState("");
  const [driverVehicle, setDriverVehicle] = useState("");
  const [passengerCity, setPassengerCity] = useState("");
  const { toast } = useToast();

  const handleDriverSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      type: 'driver',
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      city: driverCity,
      vehicleType: driverVehicle,
      message: formData.get('message') || '',
    };

    try {
      await fetch('https://script.google.com/macros/s/AKfycbw2vAYvlncn9CWb261ebeQFwYvl51iX47wzgOcpbF_XIErqZvDLN1c5TVTIchimgWt48Q/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      setIsSubmitting(false);
      setIsSuccess(true);

      toast({
        title: "🎉 You're on the waitlist!",
        description: "We'll notify you when we launch in your city.",
      });

      setTimeout(() => {
        setIsSuccess(false);
        onOpenChange(false);
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handlePassengerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      type: 'passenger',
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      city: passengerCity,
      vehicleType: '',
      message: formData.get('message') || '',
    };

    try {
      await fetch('https://script.google.com/macros/s/AKfycbw2vAYvlncn9CWb261ebeQFwYvl51iX47wzgOcpbF_XIErqZvDLN1c5TVTIchimgWt48Q/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      setIsSubmitting(false);
      setIsSuccess(true);

      toast({
        title: "🎉 You're on the waitlist!",
        description: "We'll notify you when we launch in your city.",
      });

      setTimeout(() => {
        setIsSuccess(false);
        onOpenChange(false);
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center">Join the Kabu Movement</DialogTitle>
          <DialogDescription className="text-center text-lg">
            Be part of Kenya's mobility revolution
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-12 text-center animate-scale-in">
            <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-secondary">You're on the Kabu waitlist!</h3>
            <p className="text-muted-foreground">We'll notify you when we launch in your city.</p>
          </div>
        ) : (
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="driver">Driver</TabsTrigger>
              <TabsTrigger value="passenger">Passenger</TabsTrigger>
            </TabsList>

            <TabsContent value="driver">
              <form onSubmit={handleDriverSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="driver-name">Full Name *</Label>
                  <Input id="driver-name" name="name" required placeholder="John Doe" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="driver-email">Email *</Label>
                  <Input id="driver-email" name="email" type="email" required placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="driver-phone">Phone Number *</Label>
                  <Input id="driver-phone" name="phone" type="tel" required placeholder="+254 700 000 000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="driver-city">City *</Label>
                  <Select value={driverCity} onValueChange={setDriverCity} required>
                    <SelectTrigger id="driver-city">
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nairobi">Nairobi</SelectItem>
                      <SelectItem value="mombasa">Mombasa</SelectItem>
                      <SelectItem value="kisumu">Kisumu</SelectItem>
                      <SelectItem value="nakuru">Nakuru</SelectItem>
                      <SelectItem value="eldoret">Eldoret</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vehicle-type">Vehicle Type *</Label>
                  <Select value={driverVehicle} onValueChange={setDriverVehicle} required>
                    <SelectTrigger id="vehicle-type">
                      <SelectValue placeholder="Select vehicle type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedan">Sedan</SelectItem>
                      <SelectItem value="suv">SUV</SelectItem>
                      <SelectItem value="van">Van</SelectItem>
                      <SelectItem value="motorcycle">Motorcycle</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="driver-message">Message (Optional)</Label>
                  <Textarea id="driver-message" name="message" placeholder="Tell us about your driving experience..." />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    "Join Driver Waitlist"
                  )}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="passenger">
              <form onSubmit={handlePassengerSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="passenger-name">Full Name *</Label>
                  <Input id="passenger-name" name="name" required placeholder="Jane Doe" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="passenger-email">Email *</Label>
                  <Input id="passenger-email" name="email" type="email" required placeholder="jane@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="passenger-phone">Phone Number *</Label>
                  <Input id="passenger-phone" name="phone" type="tel" required placeholder="+254 700 000 000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="passenger-city">City *</Label>
                  <Select value={passengerCity} onValueChange={setPassengerCity} required>
                    <SelectTrigger id="passenger-city">
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nairobi">Nairobi</SelectItem>
                      <SelectItem value="mombasa">Mombasa</SelectItem>
                      <SelectItem value="kisumu">Kisumu</SelectItem>
                      <SelectItem value="nakuru">Nakuru</SelectItem>
                      <SelectItem value="eldoret">Eldoret</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="passenger-message">Message (Optional)</Label>
                  <Textarea id="passenger-message" name="message" placeholder="Any questions or feedback?" />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    "Join Passenger Waitlist"
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;
