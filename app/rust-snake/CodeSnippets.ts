export const snakeStruct: string = `
struct Snake {
    color: u32,
    body: VecDeque<[usize; 2]>,
    direction: u8,
    length: usize,
}

impl Snake {
    fn new() -> Self {
        let color = 0xFF73F1;
        let direction = 0;
        let snake_length = 5;
        let starting_position: [usize; 2] = [10, 12];
        let mut snake_body = VecDeque::new();
        snake_body.push_front(starting_position);
        Snake {
            color: color,
            body: snake_body,
            direction: direction,
            length: snake_length,
        }
    }
}
`;

export const snakeRun: string = `
fn run(&mut self) {
    while self.window.is_open() {
        if self.window. is_key_down(Key::Space) && self.has_started == false {
            self.reset_buffer();
            self.has_started = true;
            let head = *self.snake.body.front().unwrap();
            self.set_cell_color(head[0], head[1], self.snake.color);
            self.set_cell_color(self.cookie_pos[0], self.cookie_pos[1], 0xF59B42);
            self.update();
        }
        if self.has_started == true {
            self.capture_input(150);
            self.calculate_next_position();
            self.cookie_check();
            let head = *self.snake.body.front().unwrap();
            self.set_cell_color(head[0], head[1], self.snake.color);
        }
        if !self.has_started {
            self.snake = Snake::new();
        }
        self.update();
        if self.window.is_key_down(Key::Escape) {
            break;
        }
    }
}
`;

export const snakeGame: string = `
struct Game {
    window: Window,
    width: usize,
    height: usize,
    buffer: Vec<u32>,
    cell_size: usize,
    snake: Snake,
    has_started: bool,
    cookie_pos: [usize; 2],
}

impl Game {
    fn new() -> Self {
        let width = 600;
        let height = 400;
        let window = Window::new("Snake", width, height, WindowOptions::default())
            .expect("Failed to create window");
        let buffer = vec![0x000000; width * height];
        Game {
            window,
            width,
            height,
            buffer,
            cell_size: 20,
            snake: Snake::new(),
            has_started: false,
            cookie_pos: [8, 9],
        }
    }
}
`;
