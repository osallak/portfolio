import AboutSection from './components/AboutSection';
import BorderFrame from './components/BorderFrame';
import ContentWindow from './components/ContentWindow';
import HeaderBar from './components/HeaderBar';
import KeyboardSection from './components/KeyboardSection';
import NavigationSection from './components/NavigationSection';

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center p-4">
      <BorderFrame>
        <div className="grid grid-cols-2 gap-2 w-full h-full">
          {/* Left Column */}
          <div className="grid grid-rows-[auto_3fr_1fr] gap-[2px]">
            {/* Top Header Bar */}
            <div className='pt-[16px] pl-7 pr-10'>
              <HeaderBar
                leftText={{
                  main: 'ENCOM TOUCH APP OS12',
                }}
                rightText="OS | 012"
              />
            </div>

            {/* About Section */}
            <ContentWindow
              title="README"
              extension=".TXT"
              endText="END. PROGRAM"
            >
              <AboutSection />
            </ContentWindow>

            {/* Bottom Left Section */}
            <ContentWindow
              title="SYSTEM"
              extension=".INFO"
              endText="END. PROGRAM"
            >
              <div className="text-tron-text">Reserved for future content</div>
            </ContentWindow>
          </div>

          {/* Right Column */}
          <div className="grid grid-rows-[3fr,1fr] gap-2">
            {/* Navigation Section */}
            <ContentWindow
              title="NAVIGATION"
              extension=".MENU"
              endText="SELECT. OPTION"
            >
              <NavigationSection />
            </ContentWindow>

            {/* Keyboard Section */}
            <ContentWindow
              title="TOUCHPOINT KEYBOARD"
              extension=""
              endText="INTERACTION. SEQUENCING"
            >
              <KeyboardSection />
            </ContentWindow>
          </div>
        </div>
      </BorderFrame>
    </main>
  );
}
