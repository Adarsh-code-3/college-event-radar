
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Switch } from '@/components/ui/switch';
import { EventType } from '../types/event';
import { getEventTypes } from '../data/mockEvents';
import { toast } from 'sonner';
import { format } from 'date-fns';

const formSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters." }),
  description: z.string().min(20, { message: "Description must be at least 20 characters." }),
  type: z.string().min(1, { message: "Please select an event type." }),
  eventDate: z.date({ required_error: "Please select a date." }),
  eventEndDate: z.date().optional(),
  isVirtual: z.boolean().default(false),
  college: z.string().min(1, { message: "Please enter a college name." }),
  building: z.string().optional(),
  city: z.string().min(1, { message: "Please enter a city." }),
  state: z.string().min(1, { message: "Please enter a state." }),
  organizerName: z.string().optional(),
  organizerEmail: z.string().email({ message: "Please enter a valid email." }).optional().or(z.literal('')),
  registrationLink: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),
  websiteLink: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),
  tags: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const EventForm: React.FC = () => {
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const eventTypes = getEventTypes();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      type: '',
      isVirtual: false,
      college: '',
      building: '',
      city: '',
      state: '',
      organizerName: '',
      organizerEmail: '',
      registrationLink: '',
      websiteLink: '',
      tags: '',
    },
  });
  
  const onSubmit = (data: FormValues) => {
    // In a real app, this would send the data to an API
    console.log('Form submitted:', data);
    
    toast.success('Event submitted successfully!');
    setSubmissionSuccess(true);
    
    // Reset the form after 2 seconds
    setTimeout(() => {
      form.reset();
      setSubmissionSuccess(false);
    }, 2000);
  };
  
  if (submissionSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className="animate-fade-in">
          <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Event Submitted</h2>
          <p className="text-gray-600 mb-6">Thank you! Your event has been submitted successfully.</p>
        </div>
      </div>
    );
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Title*</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the name of your event" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="md:col-span-2">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Description*</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe your event..." rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div>
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Type*</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div>
            <FormField
              control={form.control}
              name="eventDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Date*</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className="w-full justify-start text-left font-normal"
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span className="text-muted-foreground">Select date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div>
            <FormField
              control={form.control}
              name="isVirtual"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Virtual Event</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          
          <div>
            <FormField
              control={form.control}
              name="college"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>College/University*</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter college name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div>
            <FormField
              control={form.control}
              name="building"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Building (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter building or venue" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div>
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City*</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter city" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div>
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State*</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter state" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div>
            <FormField
              control={form.control}
              name="organizerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organizer Name (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter organizer name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div>
            <FormField
              control={form.control}
              name="organizerEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organizer Email (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter organizer email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div>
            <FormField
              control={form.control}
              name="registrationLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Registration Link (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div>
            <FormField
              control={form.control}
              name="websiteLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Website (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="md:col-span-2">
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags (optional, comma separated)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. beginner-friendly, ai, coding, prizes" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <Button type="submit" className="w-full">Submit Event</Button>
      </form>
    </Form>
  );
};

export default EventForm;
