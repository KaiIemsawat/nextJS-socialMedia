import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { UserData } from "@/lib/type";
import {
  updateUserProfileSchema,
  UpdateUserProfileValues,
} from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUpdateProfileMutation } from "./mutation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface EditProfileDialogProps {
  user: UserData;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function EditProfileDialog({
  user,
  open,
  onOpenChange,
}: EditProfileDialogProps) {
  const form = useForm<UpdateUserProfileValues>({
    resolver: zodResolver(updateUserProfileSchema),
    defaultValues: {
      displayName: user.displayName,
      bio: user.bio || "",
    },
  });

  const mutation = useUpdateProfileMutation();

  async function onSubmit(values: UpdateUserProfileValues) {
    // will be implemented
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="displayName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Display Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your display name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
