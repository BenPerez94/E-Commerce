import {
  Beef,
  Bug,
  CircleDollarSign,
  Hexagon,
  LogIn,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ThemeSwitch from "./ThemeSwitch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ModalSignIn } from "./modalSignIn";

export const Header = () => {
  return (
    <header className="p-3 bg-[hsl(var(--border))] z-30 shadow-md fixed w-full">
      <div className="flex justify-between">
        <div className="flex">
          <Beef size="40px" className="mr-3" />
          <h1>Nom du site</h1>
        </div>
        <div className="flex">
          <Input placeholder="Seach..." size={40} />
          <Search
            className="mt-2.5 ml-[-35px]"
            size={18}
            color="hsl(var(--foreground)"
          />
        </div>
        <div className="flex">
          <ModalSignIn />
        </div>
      </div>
    </header>
  );
};
