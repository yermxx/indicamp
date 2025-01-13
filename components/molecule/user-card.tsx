import AvatarPlaceholder from '../avatar-placeholder';
import { Camper } from '../organism/profile-sidebar';
import AvatarImage from '../ui/avatar-image';
import { Button } from '../ui/button';
import JobRoleTag from '../ui/job-role-tag';
import TechStack from '../ui/tech-stack';

type Props = {
  camper: Camper;
};

export default function UserCard({ camper }: Props) {
  return (
    <div
      className='w-full p-2 rounded flex-col items-center
    hover:rounded-lg hover:bg-[linear-gradient(135deg,var(--tw-gradient-stops))] 
    hover:from-violet-500/[0.12] hover:dark:from-violet-500/[0.24] 
    hover:to-violet-500/[0.04]'
      // onClick={() => setFlyoutOpen(false)}
    >
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <div className='relative'>
            {camper.user.profileimg ? (
              <AvatarImage
                src={camper.user.profileimg}
                width={32}
                height={32}
              />
            ) : (
              <AvatarPlaceholder name={camper.name} />
            )}
          </div>
          <div>
            <div className='truncate'>
              <span className='text-sm font-medium text-gray-800 dark:text-gray-100'>
                {camper.name}
              </span>
            </div>
          </div>
        </div>
        <div className='flex'>
          {camper.camperSkills.map((skill) => (
            <TechStack key={skill.id} techName={skill.name} />
          ))}
        </div>
      </div>
      <div className='flex justify-between my-2'>
        <JobRoleTag jobRole={camper.jobrole} />
        <div className='flex gap-1'>
          <Button
            className='!text-xxs text-blue-500 hover:bg-blue-300 hover:text-white'
            variant={'outline'}
            size={'xs'}
          >
            Follow
          </Button>
          <Button
            variant={'outline'}
            className='bg-white hover:bg-red-200'
            size={'xs'}
          >
            ❤️ Call
          </Button>
        </div>
      </div>
    </div>
  );
}
