"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CreateRace, CreateRaceSchema } from "@/types/game/form/createRace";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import TraitsArray from "./traits";
import { Button } from "@/components/ui/button";

interface Props {
  create: (values: CreateRace) => Promise<boolean>;
}

const defaultValues = (id: string): CreateRace => ({
  description: "",
  name: "",
  traits: [],
  gameId: id,
});

const CreateRaceForm: React.FC<Props> = ({ create }) => {
  const { id: gameId } = useParams() as { id: string };

  const form = useForm<CreateRace>({
    resolver: zodResolver(CreateRaceSchema),
    defaultValues: defaultValues(gameId),
  });

  const watch = useWatch({ control: form.control });

  const submit = async (values: CreateRace) => {
    await create(values);
  };

  return (
    <div className="p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={(nameField) => (
              <FormItem>
                <FormLabel>Race name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...nameField.field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={(descriptionField) => (
              <FormItem>
                <FormLabel>Race description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Name" {...descriptionField.field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <TraitsArray />
          <Button>Create</Button>
        </form>
      </Form>
      <pre>{JSON.stringify(watch, null, 2)}</pre>
    </div>
  );
};

export default CreateRaceForm;
