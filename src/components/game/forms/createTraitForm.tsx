"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CreateTrait, CreateTraitSchema } from "@/types/game/form/createTrait";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trait } from "@prisma/client";
import { useForm } from "react-hook-form";

interface Props {
  gameId: string;
  createTraitAction: (values: CreateTrait) => Promise<Trait | null>;
}

const CreateTrateForm: React.FC<Props> = ({ gameId, createTraitAction }) => {
  const form = useForm<CreateTrait>({
    resolver: zodResolver(CreateTraitSchema),
    defaultValues: {
      description: "",
      name: "",
      gameId,
    },
  });

  const submit = async (values: CreateTrait) => {
    try {
      await createTraitAction(values);
      form.reset();
    } catch (error) {
      console.log("not created", error);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Trait name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Trait name</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button>Create trait</Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateTrateForm;
