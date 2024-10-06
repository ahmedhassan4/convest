import { Text, Avatar, AvatarProps } from 'rizzui';
import cn from '../utils/class-names';

interface AvatarCardProps {
  name: string;
  className?: string;
  description?: string;
  avatarProps?: AvatarProps;
}

export default function AvatarCard({
  name,
  className,
  description,
  avatarProps,
}: AvatarCardProps) {
  return (
    <figure className={cn("flex items-center gap-3", className)}>
      <Avatar name={name} {...avatarProps} />
      <figcaption className="grid gap-0.5">
        <Text className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">
          {name}
        </Text>
        {description && (
          <Text className="text-[13px] text-gray-500">{description}</Text>
        )}
      </figcaption>
    </figure>
  );
}
