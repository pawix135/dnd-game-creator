"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreateGame, CreateGameSchema } from "@/types/game/form/createGame";
import { zodResolver } from "@hookform/resolvers/zod";
import { Game } from "@prisma/client";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  createGameAction: (values: FormData) => Promise<Game | null>;
}

const CreateGameForm: React.FC<Props> = ({ createGameAction }) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const form = useForm<CreateGame>({
    resolver: zodResolver(CreateGameSchema),
    defaultValues: {
      title: "",
      image: undefined,
    },
  });

  const createNewGame = async (values: CreateGame) => {
    console.log(values);
    const formData = new FormData();
    formData.set("title", values.title);
    formData.set("image", values.image);
    const game = await createGameAction(formData);
    if (!game) {
      console.log("Game not created!");
      return;
    }
    setIsDialogOpen(false);
    console.log("Game create successfuly");
  };

  return (
    <div className="p-5">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="size-[64px]">
            <Plus size={32} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create new game</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(createNewGame)} className="space-y-5">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Game title</FormLabel>
                    <FormControl>
                      <Input placeholder="Game Title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel>Game icon</FormLabel>
                    <FormControl>
                      <Input
                        {...fieldProps}
                        placeholder="Game icon"
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          onChange(e.target.files && file);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button>Create</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateGameForm;
